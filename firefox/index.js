var self = require("sdk/self");
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: ["*.messenger.com","*.facebook.com"],
  contentScriptFile: self.data.url("no-facebook-emojis.js")
});
