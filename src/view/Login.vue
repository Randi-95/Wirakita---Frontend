<template>
    <div class="flex flex-col lg:flex-row h-screen w-full lg:bg-[#06CAF5]">
        <div class="lg:w-1/2 hidden lg:flex relative items-center justify-center">
            <p class="font-bold text-4xl absolute top-10 left-10">WiraKita</p>
            <img src="/public/vector-auth.png" alt="">
        </div>
        <div class="lg:w-1/2 flex lg:justify-center lg:items-center">
            <div class="w-full  lg:w-[76%] mx-auto h-auto bg-white lg:rounded-lg p-6">
                <div class="">
                 <h1 class="font-extrabold text-3xl">Masuk Sekarang</h1>
                 <p class="font-medium text-xs">Belum punya akun?<router-link to="/register" class="text-[#06CAF5] font-bold">Daftar dulu yuk!</router-link></p>
                </div>

                <div class="bg-white p-2 rounded-xl max-w-2xl w-full mt-2">
                    <form action="#" method="post">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                            <div class="md:col-span-2">
                                <label for="email" class="block text-sm font-medium text-gray-500">
                                    Email <span class="text-red-500">*</span>
                                </label>
                                <div class="mt-1">
                                    <input type="email" id="email" name="email" placeholder="Masukkan alamat email" required
                                        class="w-full h-10 px-4 py-3 border border-[#06CAF5] rounded-sm text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition duration-200">
                                </div>
                            </div>
                            <div>
                                <label for="password" class="block text-sm font-medium text-gray-500">
                                    Kata Sandi <span class="text-red-500">*</span>
                                </label>
                                <div class="mt-1">
                                    <input type="password" id="password" name="password" placeholder="Masukkan Kata Sandi" required
                                        class="w-full h-10 px-4 py-3 border border-[#06CAF5] rounded-sm text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition duration-200">
                                </div>
                            </div>
                            <div>
                                <label for="confirm_password" class="block text-sm font-medium text-gray-500">
                                    Konfirmasi Sandi <span class="text-red-500">*</span>
                                </label>
                                <div class="mt-1">
                                    <input type="password" id="confirm_password" name="confirm_password" placeholder="Konfirmasi Kata Sandi Anda" required
                                        class="w-full h-10 px-4 py-3 border border-[#06CAF5] rounded-sm text-xs text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition duration-200">
                                </div>
                            </div>
                            <div class="md:col-span-2 flex items-center mt-2 gap-2">
                              <input type="checkbox" required>
                              <p class="text-[10px] ">Saya Menyetujui <span class="text-[#06CAF5] font-semibold">Syarat Ketentuan</span> dan <span class="text-[#06CAF5] font-semibold">Kebijakan Privasi</span> yang Berlaku</p>
                            </div>
                            <div class="md:col-span-2 mt-1">
                                <button type="submit" class="w-full bg-cyan-500 text-white font-bold py-3 px-4 rounded-xl hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition duration-200">
                                    Masuk
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>