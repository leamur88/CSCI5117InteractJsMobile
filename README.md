# Mobile-Only InteractJS Features

## Link to Website
Live website for Demo ([Link](https://sprightly-cactus-bd673e.netlify.app/))

![Image](DemoQR.png)

### Background
This repository features examples for InteractJS's two most useful mobile-only features: Multi-touch rotation and Pinch-to-zoom. The mobile only features rely on the ```gesturable``` function within InteractJs ([Docs](https://interactjs.io/docs/gesturable/)). It functions extremely similarly to all of the functions mentioned in the previous repository with the distinction that gesture only gets triggered when two pointers go down and move.

### Multi-touch rotation
The multi-touch rotation page features a simple arrow polygon that can rotate 360 degrees. As the arrow rotates both the angle it is pointing at as well as the direction it corresponds to are updated in real time.

### Pinch-to-zoom
The pinch to zoom feature is shown in two pages. The first page is a picture of the NFL Wide Receiver Justin Jefferson. This page simply shows how intuitive the pinch to zoom feature from InteractJS works. The second page loads Starry Night by Vincent van Gogh. This page is a little buggy because we specifically chose an extremely high-resolution picture. Depending on your phone/network connection the zoom will feel choppy, but if it does work you get to see the painting in mind-blowing detail on your phone.


## Debugging Mobile-Only Features
This next section describes two ways to debug mobile only features using a laptop and phone.

### Mac and iPhone Combo
If you have both a Mac and an iPhone, debugging your mobile code is incredibly easy. All you need is to have both devices and a cable to connect them. From there follow [this](https://www.lifewire.com/activate-the-debug-console-in-safari-445798) guide to ensure that all of the correct settings are activated on both devices. tl;dr: make sure Web Inspector and Javascript are on in your iPhone's settings for safari and enable the developer menu for safari on your mac. Once everything is setup, all you need to do is go to the website on your phone, connect to your mac via the cable, and click on the third option down from the developer menu on your mac. This will open up the web inspector on your computer which will update everything you expect to see in a developer (console, network, etc.) in real time.

If you want to test this on a locally running website (i.e. localhost:3000), then the process is a little more involved. I highly recommend using [this](https://ymoondhra.medium.com/how-to-run-localhost-on-your-iphone-4110a54d1896) guide in order to get things up and running. Basically you have to update your internet sharing settings on your mac, make sure the network supports it (edu roam does not), and follow a specific url pattern to access the localhost.


### Any OS / Any Phone Combo

Requirements: Your local machine recognizes your WiFi as a private network (so your device is discoverable)

1. In your Terminal, get your IPv4 address: 

```
ipconfig
```
 
2. Type that address into your phone + “:” + port (usually 3000 for Next.js apps). Example: [192.168.1.0:3000]()
3. Ta-da! Live changes will push to your phone, just like they would on your local machine.

Want to see console errors? Install browser-sync into your project's root directory:

```
npm install browser-sync
```

After running ‘npm run dev’ to launch your dev server, in another terminal run:

```
npm browser-sync start -p localhost:3000
```

browser-sync` will proxy your dev server. Now, all browsers (mobile or not) you made earlier will change in sync with all other browsers if you open the public dev address on the proper port. The next available port, usually 3001, will now be the sync’d version of your Next.js app!