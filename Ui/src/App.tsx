function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-64 bg-white shadow-lg transition-all duration-300 ease-in-out flex flex-col">
        <h1 className="h-16 flex items-center justify-between px-12 border-b text-xl font-bold text-gray-800">
          <i className="bi bi-globe-asia-australia mr-5"></i>
          <span className="uppercase">Mandeman</span>
        </h1>
        <div className="flex-grow overflow-y-auto">
          <nav className="mt-5">
            <a href="#" className="flex items-center px-6 py-3 text-blue-600 bg-blue-50 border-r-4 border-blue-600 transition-colors duration-200">
              <i className="bi bi-house-door text-lg mr-3"></i>
              <span>Beranda</span>
            </a>
            <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
              <i className="bi bi-envelope text-lg mr-3"></i>
              <span>Surat Masuk</span>
            </a>
            <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
              <i className="bi bi-envelope-paper text-lg mr-3"></i>
              <span>Surat Keluar</span>
            </a>
            <a href="#" className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200">
              <i className="bi bi-gear text-lg mr-3"></i>
              <span>Pengaturan</span>
            </a>
          </nav>
        </div>
        <div className="border-t mt-auto">
          <button className="flex items-center w-full px-6 py-4 text-gray-700 hover:bg-red-50 hover:text-red-500 transition-colors duration-200">
            <i className="bi bi-box-arrow-left text-lg mr-3"></i>
            <span>Logout</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="bg-white shadow-sm mx-8">
          <div className="px-8 py-2 flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
              <p className="text-sm text-gray-600">Selamat datang kembali, Admin</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <i className="bi bi-bell text-xl"></i>
              </button>
              <div className="flex items-center space-x-3 border-l pl-4">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
                  A
                </div>
                <span className="text-sm font-medium text-gray-700">Admin</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Total Surat</p>
                  <h3 className="text-white text-3xl font-bold mt-2">2,847</h3>
                </div>
                <div className="bg-purple-400/30 rounded-full p-3">
                  <i className="bi bi-envelope text-2xl text-white"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center text-purple-100">
                <i className="bi bi-arrow-up-short text-lg"></i>
                <span className="text-sm font-medium">12% dari bulan lalu</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Surat Masuk</p>
                  <h3 className="text-white text-3xl font-bold mt-2">1,438</h3>
                </div>
                <div className="bg-blue-400/30 rounded-full p-3">
                  <i className="bi bi-envelope-paper text-2xl text-white"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center text-blue-100">
                <i className="bi bi-arrow-up-short text-lg"></i>
                <span className="text-sm font-medium">8% minggu ini</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-100 text-sm font-medium">Surat Keluar</p>
                  <h3 className="text-white text-3xl font-bold mt-2">1,409</h3>
                </div>
                <div className="bg-emerald-400/30 rounded-full p-3">
                  <i className="bi bi-envelope-paper-fill text-2xl text-white"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center text-emerald-100">
                <i className="bi bi-arrow-up-short text-lg"></i>
                <span className="text-sm font-medium">5% dari kemarin</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-100 text-sm font-medium">Rating Terkirim</p>
                  <h3 className="text-white text-3xl font-bold mt-2">94%</h3>
                </div>
                <div className="bg-amber-400/30 rounded-full p-3">
                  <i className="bi bi-check2-circle text-2xl text-white"></i>
                </div>
              </div>
              <div className="mt-4 flex items-center text-amber-100">
                <i className="bi bi-arrow-up-short text-lg"></i>
                <span className="text-sm font-medium">Sangat Baik</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-semibold text-gray-800">Daftar Surat Terbaru</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Lihat Semua
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-100">
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">No Surat</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Jenis</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tanggal</th>
                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm text-gray-800 font-medium">SRT/2024/001</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            Masuk
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">20 Jan 2024</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Selesai
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm text-gray-800 font-medium">SRT/2024/002</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                            Keluar
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">19 Jan 2024</td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            Proses
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Aktivitas Terkini</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <i className="bi bi-envelope text-blue-600"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-800">Surat masuk baru telah ditambahkan</p>
                    <p className="text-xs text-gray-500 mt-1">2 menit yang lalu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <i className="bi bi-check-circle text-green-600"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-800">Surat keluar telah disetujui</p>
                    <p className="text-xs text-gray-500 mt-1">1 jam yang lalu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
