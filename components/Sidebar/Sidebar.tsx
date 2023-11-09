import Logo from "../Logo/Logo";

const Sidebar = () => {
  return (
    <div className="h-full flex border-r flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Logo />
      </div>
    </div>
  );
};

export default Sidebar;
