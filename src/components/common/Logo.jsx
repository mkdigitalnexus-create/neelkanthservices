export default function Logo({ light = false, className = "" }) {
  if (light) {
    return (
      <div className={`inline-flex items-center justify-center overflow-hidden rounded-lg bg-white p-2 shadow-sm ${className}`}>
        <img
          src="/assets/brand/logo.jpeg"
          alt="Neelkhanth Transport Services"
          className="h-full w-full object-contain"
          loading="eager"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <img
      src="/assets/brand/logo.jpeg"
      alt="Neelkhanth Transport Services"
      className={`object-contain ${className}`}
      loading="eager"
      decoding="async"
    />
  );
}
