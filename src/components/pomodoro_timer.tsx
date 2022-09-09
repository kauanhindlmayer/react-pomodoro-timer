import React from 'react';
import { useInterval } from '../hooks/user_interval';
import { secondsToTime } from '../utils/seconds_to_time';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = React.useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div>Timer: {secondsToTime(mainTime)}</div>;
}
