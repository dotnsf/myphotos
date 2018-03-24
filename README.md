# myphotos

## Overview

Sample application to use Instagram Sandbox API.

## Pre-requisite

- Instagram account

    - https://www.instagram.com/

- Instagram Developer's Client ID (with redirect URI)

    - https://www.instagram.com/developer/


## Setting

- Deploy application into the server with applied redirect URI.

- Edit settings.js with client_id and redirect_uri of above Instagram Developer's(optional)

- Install libraries:

    - ``$ npm install``

- Deploy and Run this application again:

    - ``$ node app``


## How to Use

- Access to web application with parameter client_id and redirect_uri:

    - Edit settings.js with client_id and redirect_uri, and browse web application: 

        - ``https://xxx.xxx.com/``

    - , or browse with URL parameters:

        - ``https://xxx.xxx.com/?client_id=(client_id)&redirect_uri=(redirect_uri)``

- Login with your Instagram account.

- You will see your recent posted images and movies. You can flick and slide images. You can also tap single image to see detailed information with Instagram.
    

## Restriction

If you use Sandbox Mode of Instagram API, you would be restricted for this mode. For example ..

    - 10 users for each application.

    - 20 most recent media for each user.

    - 500 API call/hour.

See this page for details of Sandbox Mode:

    - https://www.instagram.com/developer/sandbox/


## Licensing

This code is licensed under MIT.

## Copyright

2018 [K.Kimura @ Juge.Me](https://github.com/dotnsf) all rights reserved.
