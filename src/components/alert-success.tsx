import React, { useEffect } from 'react';

interface TData {
  visible: boolean;
}

interface Props {
  t: TData;
  text: string;
}

export default function AlertSuccess(props: Props) {
  const { text, t } = props;

  return (
    <div
      className={`alert alert-success shadow-lg ${t.visible ? 'animate-enter' : 'animate-leave'}`}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{text}</span>
      </div>
    </div>
  );
}
