"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RoonServiceConfig = `#!/bin/sh

NAME=raat_app
PIDFILE=/var/run/$NAME.pid
DAEMON=/opt/roon/$NAME
DAEMON_ARGS="/opt/roon/config.json"

pid_file_exists() {
    [ -f "$PIDFILE" ]
}

get_pid() {
    echo "$(cat "$PIDFILE")"
}

is_running() {
    PID="$(get_pid)"
    [ -d /proc/$PID ]
}

start() {
    printf "Starting $NAME: "
    start-stop-daemon -S -q -m -b -p $PIDFILE --exec $DAEMON -- $DAEMON_ARGS
    case "$?" in
        0)
            if pid_file_exists
            then
                echo "$NAME started ($(get_pid))"
            else
                echo "$NAME started, but we do not have a PID yet"
            fi
            exit 0
        ;;
        1)
            if pid_file_exists
            then
                echo "$NAME seems to be running ($(get_pid))"
            else
                echo "$NAME seems to be running, but we do not have a PID yet"
            fi
            exit 0
        ;;
        2)
            echo "This is really strange [2]"
        ;;
        3)
            echo "ERROR: $NAME did not start"
        ;;
        *)
            echo "This is really strange [???]"
    esac
    exit 1
}
stop() {
        printf "Stopping $NAME: "
        start-stop-daemon -K -q -p $PIDFILE
        [ $? = 0 ] && echo "OK" || echo "FAIL"
}
restart() {
        stop
		sleep 2
        start
}

status() {
    if pid_file_exists
    then
        if is_running
        then
            PID=$(get_pid)
            echo "$NAME is running with pid $PIDFILE : $(get_pid)"
        else
            echo "$NAME is stopped, but pid file exists"
        fi
    else
        echo "$NAME is stopped"
    fi
}

case "$1" in
  start)
        start
        ;;
  stop)
        stop
        ;;
  restart|reload)
        restart
        ;;
  status)
        status
        ;;
  *)
        echo "Usage: $0 {start|stop|restart}"
        exit 1
esac

exit $?`;
exports.default = RoonServiceConfig;
//# sourceMappingURL=roon-service-config.js.map