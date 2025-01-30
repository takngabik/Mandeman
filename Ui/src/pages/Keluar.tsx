interface KeluarProps { }

const Keluar: React.FC<KeluarProps> = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Total Surat Keluar</p>
              <h3 className="text-2xl font-bold text-gray-800">98</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <i className="bi bi-envelope-paper text-blue-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Surat Keluar Hari Ini</p>
              <h3 className="text-2xl font-bold text-gray-800">5</h3>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <i className="bi bi-calendar-check text-green-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Menunggu Tanda Tangan</p>
              <h3 className="text-2xl font-bold text-gray-800">2</h3>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <i className="bi bi-pen text-yellow-600 text-xl"></i>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Sudah Dikirim</p>
              <h3 className="text-2xl font-bold text-gray-800">96</h3>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <i className="bi bi-send-check text-purple-600 text-xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Daftar Surat Keluar</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <i className="bi bi-plus-lg mr-2"></i>
              Tambah Surat
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">No</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Nomor Surat</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tanggal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tujuan</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Perihal</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">1</td>
                <td className="px-6 py-4">001/SK/2024</td>
                <td className="px-6 py-4">01/01/2024</td>
                <td className="px-6 py-4">Dinas Kesehatan</td>
                <td className="px-6 py-4">Permohonan Kerjasama</td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Terkirim</span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">
                    <i className="bi bi-eye"></i>
                  </button>
                  <button className="text-green-600 hover:text-green-800 mr-3">
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Keluar;
