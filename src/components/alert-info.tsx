import React, { useEffect } from 'react';

interface TData {
  visible: boolean;
}

interface Props {
  t: TData;
  text: string;
}

export default function AlertInfo(props: Props) {
  const { text, t } = props;

  return (
    <div className={`alert alert-info shadow-lg ${t.visible ? 'animate-enter' : 'animate-leave'}`}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-current flex-shrink-0 w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span>{text}</span>
      </div>
    </div>
  );
}
