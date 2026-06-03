import "dotenv/config";
import express from "express";
import { publish, MessagePriority } from "ntfy";
import config from "./config.json" with { type: "json" };
import fs from "fs/promises";
import { UAParser } from "ua-parser-js";

const app = express();
const PORT = Number(process.env.PORT);

app.set("trust proxy", true);

for (const image of config.images) {
    app.get(`/${encodeURI(image.name)}`, async (req, res) => {
        try {
            const buffer = Buffer.from(image.data, "base64");
            const extension = image.name.split(".").at(-1).toLowerCase();
            if (extension === "jpg") extension = "jpeg";
            res.setHeader("Content-Type", `image/${extension}`);
            res.send(buffer);
            const userAgent = UAParser(req.headers["user-agent"]);
            const title = `New connection for image "${image.name}"`;
            const message = `At ${new Date(Date.now()).toLocaleString()}\n
                             IP: ${req.socket.remoteAddress} | PORT: ${req.socket.remotePort}\n
                             Browser: ${userAgent.browser.name} version ${userAgent.browser.version}\n
                             OS: ${userAgent.os.name} version ${userAgent.os.version}\n
                             CPU architecture: ${userAgent.cpu.architecture}\n
                             Languages: ${req.headers["accept-language"]}\n
                             Source: ${req.get("Sec-Fetch-Dest")}
                                        
            `;

            await publish({
                authorization: {
                    username: process.env.NTFY_USER,
                    password: process.env.NTFY_PASSWORD,
                },
                title: title,
                message: message,
                topic: process.env.NTFY_TOPIC,
                server: process.env.NTFY_SERVER,
                priority: MessagePriority.DEFAULT,
            });
        } catch (error) {
            console.error(error);
            res.status(500).send("Server Error");
        }
    });
}

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
