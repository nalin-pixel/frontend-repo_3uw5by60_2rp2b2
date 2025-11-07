import React from 'react';
import { User, Shield, Coins } from 'lucide-react';

const tabs = [
  { key: 'founder', label: 'Founder', icon: User },
  { key: 'investor', label: 'Investor', icon: Coins },
  { key: 'admin', label: 'Admin', icon: Shield },
];

export default function RoleSwitcher({ value, onChange }) {
  return (
    <div className="inline-flex items-center rounded-lg bg-gray-100 p-1 dark:bg-gray-800">
      {tabs.map(({ key, label, icon: Icon }) => {
        const active = value === key;
        return (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`flex items-center gap-2 rounded-md px-4 py-2 text-sm transition-all focus:outline-none ${
              active
                ? 'bg-white text-gray-900 shadow dark:bg-gray-900 dark:text-white'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
            }`}
            aria-pressed={active}
          >
            <Icon className="h-4 w-4" />
            {label}
          </button>
        );
      })}
    </div>
  );
}
