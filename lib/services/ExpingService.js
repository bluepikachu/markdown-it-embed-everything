// Copyright (c) Rotorz Limited and portions by original markdown-it-video authors
// Licensed under the MIT license. See LICENSE file in the project root.

"use strict";

const VideoServiceBase = require("./VideoServiceBase");


class ExpingService extends VideoServiceBase {

  getDefaultOptions() {
    return { width: 550, height: 400 };
  }

  extractVideoID(reference) {
    let match = url.match(/https:\/\/web\.expingworld\.com\/curator-map\/(\d+)/);
    return match ? match[1] : null;
  }

  getVideoUrl(videoID) {
    let escapedVideoID = this.env.md.utils.escapeHtml(videoID);
    return "https://web.expingworld.com/curator-map/" + escapedVideoID;
  }

}


module.exports = ExpingService;

//<iframe src="https://web.expingworld.com/curator-map/24306" frameborder="0" sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin allow-storage-access-by-user-activation allow-popups-to-escape-sandbox" allowfullscreen="" style="position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; border-radius: 1px; pointer-events: auto; background-color: white;"></iframe>
