import websiteLogo from "/icon.svg";

export default function Footer() {
  return (
    <div>
      <div className="flex items-center justify-center gap-x-5 m-4">
        <div className="header-logo flex items-center gap-x-2">
          <img src={websiteLogo} alt="" className="w-10 h-10" />
          <h2 className="text-black font-bold text-base">Validateme ©️ 2024</h2>
        </div>
      </div>
    </div>
  );
}
