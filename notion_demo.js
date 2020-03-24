var PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
var pc = new PeerConnection({
    iceServers: [{
        urls: "stun:stun.services.mozilla.com"
    }]
});
var ip = ''
pc.onicecandidate = function(event) {
    if (event.candidate) {
        var candidate = event.candidate.candidate;
        // candidate:2795255774 1 udp 2122260223 192.168.1.7 64974 typ host generation 0 ufrag W1Ah3U1F3qZXQ8aM
        ip = candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/)[1];
    }
};
console.log(ip)

// pc.createDataChannel("c7sky.com");
pc.createDataChannel("rqcao.com");

pc.createOffer(function(offer) {
    pc.setLocalDescription(offer);
}).then((r)=>{console.log(r.sdp)});


background-image: url("https://user-gold-cdn.xitu.io/2019/5/21/16ad8525d9e1295a?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1");