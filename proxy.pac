function FindProxyForURL(url, host) {
	var socksProxies = [
		"SOCKS5 150.230.96.150:19291",
		"SOCKS5 152.70.100.52:12574",
		"HTTPS 160.248.91.70:3128",
		"HTTPS 20.44.190.150:3129"
	];
	return socksProxies.join("; ") + "; DIRECT";
}
