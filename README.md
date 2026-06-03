<h1 align="center">Image Tracker</h1>

<p align="center">
    <img alt="Stars" src="https://img.shields.io/github/stars/Gabi-Zar/Image-Tracker?style=flat&color=magenta">
    <img alt="Forks" src="https://img.shields.io/github/forks/Gabi-Zar/Image-Tracker?style=flat&color=purple">
    <img alt="License" src="https://img.shields.io/github/license/Gabi-Zar/Image-Tracker?style=flat&color=BB0000">
    <br>
    <a href="https://github.com/Gabi-Zar"><img title="Developer" src="https://img.shields.io/badge/developer-GabiZar-blue"></a>
    <img alt="Written In" src="https://img.shields.io/badge/Written%20In-Javascript-yellow?logo=javascript">
</p>

---

A tracking image tool that send data over ntfy.

## Config & Usage

Configure the server port and ntfy settings using a `.env` file.

```
PORT=3000
NTFY_USER=user
NTFY_PASSWORD=password
NTFY_TOPIC=my-topic
NTFY_SERVER=https://ntfy.sh
```

Add images by creating a config.json file containing an array of image paths and Base64-encoded data. See [exemple.config.json](exemple.config.json)

Installe dependencies with `npm install`
And just run `npm run start` or `node main.js`

## Output Exemple

```
New connection for image "path/to/image.gif"
At dd/mm/yyyy hh:mm:ss
IP: xxx.xxx.xxx.xxx | PORT: xxxxx
Browser: Chrome version xxx
OS: Windows version 10
CPU architecture: amd64
Languages: en-US,en;q=0.9
Source: document
```

## License

This project is licensed under the [GPL-3.0 license](LICENSE).

---

<p align="center">If you like this app, consider giving it a star on GitHub!</p>
