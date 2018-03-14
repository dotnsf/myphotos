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

- Go to following URL with your browser:

    - https://instagram.com/oauth/authorize/?client_id=(Instagram Client ID)&redirect_uri=(redirect URI)&response_type=token&scope=public_content

- Accept authorization with your Instagram account.

- You will find you are redirected to your application server with following formatted parameter:

    - (redirect URI)#access_token=XXXXXXX.XXXXXXX

- Edit settings.js with above access_token value:

    - exports.access_token = 'XXXXXXX.XXXXXXX';

- Deploy and Run this application again:

    - ``$ node app``


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
