(function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,"script","https://www.google-analytics.com/analytics.js","ga");
ga("create", "UA-46030182-4", "auto");
ga("send", "pageview");

var _support = _support || { "ui": {}, "user": {} };
_support["account"] = "stackstorm";
_support["custom_fields"] = {
  source: {
    type: "hidden",
    value: "StackStorm Exchange"
  },
  slack_username: {
    type: "text",
    value: "",
    placeholder: "Community Slack username",
    required: true
  },
  pack_url: {
    type: "text",
    value: "",
    placeholder: "Pack URL (GitHub preferred)",
    required: true
  },
};
