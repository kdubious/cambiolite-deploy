"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shairport_SyncServiceConfig = `#! /bin/sh

# Additional options that are passed to Shairport Sync
OPTIONS="-d -c /opt/shairport-sync/shairport-sync.conf"

case "$1" in
    start)
	#printf "Starting shairport-sync: "
	#start-stop-daemon -S -q --exec /usr/bin/shairport-sync -- $OPTIONS
	#[ $? = 0 ] && echo "OK" || echo "FAIL"
  echo "DISABLED"
	;;
    stop)
	printf "Stopping shairport-sync: "
	start-stop-daemon -K -q --exec /usr/bin/shairport-sync \
		-p /var/run/shairport-sync/shairport-sync.pid
	[ $? = 0 ] && echo "OK" || echo "FAIL"
	;;
    restart)
	$0 stop
	sleep 1
	$0 start
	;;
    *)
	echo "Usage: $0 {start|stop|restart}"
	exit 1
	;;
esac`;
exports.default = Shairport_SyncServiceConfig;
//# sourceMappingURL=shairport-sync-service-config.js.map