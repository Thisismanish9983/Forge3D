import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'copper'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-graphite-950 disabled:opacity-50 disabled:cursor-not-allowed select-none group';
  
  const sizeClasses = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-semibold'
  };

  const variantClasses = {
    primary: 'bg-copper-500 hover:bg-copper-600 text-white shadow-glow-copper hover:shadow-glow-copper-lg focus:ring-copper-500 border border-copper-400/30',
    copper: 'bg-gradient-to-r from-copper-600 via-copper-500 to-amber-500 hover:from-copper-500 hover:to-amber-400 text-white shadow-glow-copper hover:shadow-glow-copper-lg focus:ring-copper-500 border border-copper-400/40',
    secondary: 'bg-graphite-800 hover:bg-graphite-700 text-slate-100 border border-graphite-700 hover:border-slate-600 focus:ring-slate-400 shadow-sm',
    outline: 'bg-transparent hover:bg-copper-500/10 text-copper-400 hover:text-copper-300 border border-copper-500/40 hover:border-copper-400 focus:ring-copper-500',
    ghost: 'bg-transparent hover:bg-graphite-800/80 text-slate-300 hover:text-white border border-transparent focus:ring-slate-500'
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className={`${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} transition-transform group-hover:-translate-x-0.5`} />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className={`${size === 'sm' ? 'w-3.5 h-3.5' : size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} transition-transform group-hover:translate-x-0.5`} />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
