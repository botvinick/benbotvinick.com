main() {
  while true
  do
    say 'penis'
  
    # get interval
    minInterval=5
    maxInterval=10
    interval=$(jot -r 1 $minInterval $maxInterval)
  
    # set delay
    sleep $interval
  done
}

nohup $(main)
