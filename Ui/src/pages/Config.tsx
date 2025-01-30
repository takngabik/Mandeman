import SchoolIdentity from "../components/config/SchoolIdentity";
import UserManagement from "../components/config/UserManagement";

interface ConfigProps { }

const Config: React.FC<ConfigProps> = () => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="order-2 md:order-1">
          <h2 className="text-xl font-semibold mb-4">Manajemen Pengguna</h2>
          <UserManagement />
        </section>
        
        <section className="order-1 md:order-2">
          <h2 className="text-xl font-semibold mb-4">Identitas Sekolah</h2>
          <SchoolIdentity />
        </section>
      </div>
    </div>
  );
};

export default Config;
