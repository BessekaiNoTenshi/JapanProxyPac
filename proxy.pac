function FindProxyForURL(url, host) {
    var socksProxies = [
        "SOCKS5 47.245.56.108:18181",
        "SOCKS5 131.186.37.99:8080",
        "SOCKS5 150.230.96.150:19291",
        "SOCKS5 152.70.100.52:12574",
		"SOCKS5 132.226.7.23:30277"
    ];
    return socksProxies.join("; ") + "; DIRECT";
}
