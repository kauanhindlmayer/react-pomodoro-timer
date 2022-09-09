import React from 'react';
import { secondsToTime } from '../utils/seconds_to_time';

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  return <div className="timer">{secondsToTime(props.mainTime)}</div>;
}
