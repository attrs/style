<template>
  <div class="x-card m-auto">
    <div class="absolute x-navbar p-2 z-10">
      <div></div>
      <div>
        <a href="javascript:;" class="btn btn-sm btn-outline border-none btn-default">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrow-left mr-1"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path></svg>
          홈으로
        </a>
      </div>
    </div>
    <div class="py-6 lg:py-12 px-10 pb-6 flex-1 flex relative">
      <div class="p-md min-w-lg py-6">
        <div class="mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162.59 190.78" fill="currentColor" width="1em" height="1em" class="text-4xl text-black mb-5 hidden">
            <rect x="215.24" y="199.94" width="32" height="48" rx="1.99" transform="rotate(-45 -25.348 365.71)"></rect>
            <rect x="271.81" y="143.37" width="32" height="48" rx="1.99" transform="rotate(-45 31.22 309.139)"></rect>
            <rect x="266.15" y="250.85" width="32" height="48" rx="1.99" transform="rotate(-45 25.56 416.622)"></rect>
            <path d="M.39 105.53a1.83 1.83 0 00.29 2.54l26.92 26.87 28.29 28.29 26.83 26.86a1.83 1.83 0 002.53.28l20.35-20.36a1.81 1.81 0 00-.28-2.53L78.45 140.6l-28.29-28.28L23.3 85.44a1.82 1.82 0 00-2.53-.28zM56.96 48.97a1.83 1.83 0 00.28 2.53l26.88 26.87 28.29 28.29 26.87 26.88a1.84 1.84 0 002.54.28l20.37-20.38a1.82 1.82 0 00-.28-2.53l-26.88-26.88-28.28-28.28-26.88-26.88a1.82 1.82 0 00-2.53-.28z"></path>
          </svg>
          <h1 class="font-bold text-3xl mb-4 text-active">회원가입</h1>
          <span class="font-normal mb-3 text-sm">
            간편하게 가입하고 무료로 시작해보세요. 👋
            <br />
            최소한의 정보 입력만으로 시작할 수 있습니다.
          </span>
        </div>
        <div class="my-12 mb-10 relative">
          <div>
            <div>
              <a class="btn btn-md btn-default btn-outline block mb-4 transition transition-all duration-150 shadow-md hover:shadow-none cursor-pointer">
                <svg width="1em" height="1em" viewBox="0 0 14 14" aria-label="github" class="icon text-lg text-black">
                  <path
                    d="M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 011.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z"
                    fill="currentColor"
                  ></path>
                </svg>
                GitHub 계정으로 가입하기
              </a>
              <a class="btn btn-md btn-default btn-outline block mb-4 transition transition-all duration-150 shadow-md hover:shadow-none cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="1em" height="1em" class="icon text-lg">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                  <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
                Google 계정으로 가입하기
              </a>
              <a class="btn btn-md btn-default btn-outline block mb-4 transition transition-all duration-150 shadow-md hover:shadow-none cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 21 21" class="icon text-lg">
                  <path fill="#f25022" d="M1 1h9v9H1z"></path>
                  <path fill="#00a4ef" d="M1 11h9v9H1z"></path>
                  <path fill="#7fba00" d="M11 1h9v9h-9z"></path>
                  <path fill="#ffb900" d="M11 11h9v9h-9z"></path>
                </svg>
                Microsoft 계정으로 가입하기
              </a>
            </div>
            <div class="my-6 mt-8 text-sm text-center text-light">또는</div>
            <div class="mb-12">
              <form>
                <!---->
                <div class="mb-3">
                  <label for="email" class="x-form-label">이메일 주소</label>
                  <div>
                    <div class="x-form-control pl-0 overflow-hidden">
                      <div class="px-4 border-r text-lg transition transition-all duration-200 hidden bg-active bg-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" class="bi bi-envelope"><path d="M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v.217l7 4.2 7-4.2V4a1 1 0 00-1-1H2zm13 2.383l-4.708 2.825L15 11.105V5.383zm-.034 6.876l-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 002 13h12a1 1 0 00.966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"></path></svg>
                      </div>
                      <div class="px-4 flex-1"><input type="email" placeholder="이메일 주소" class="w-full outline-none x-input font-medium" /></div>
                      <!---->
                    </div>
                    <!---->
                  </div>
                </div>
                <!---->
                <!---->
                <div class="text-center">
                  <div class="flex items-center justify-center"><button type="button" class="mt-8 btn btn-primary btn-disabled hidden">가입하기</button></div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="font-semibold text-center mt-8">
          <div class="text-sm text-light">
            <span class="text-default">이미 가입하셨나요?</span>
            <a href="javascript:;" class="text-link ml-2">로그인하기</a>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-12 max-w-xl mx-auto text-center">
      <div class="my-4 text-sm font-semibold text-light">
        <a href="javascript:;" target="help" class="link mx-2">서비스이용약관</a>
        ·
        <a href="javascript:;" target="help" class="link mx-2">개인정보처리방침</a>
      </div>
      <div class="text-sm font-semibold opacity-75 hidden">© Cloudtype Inc.</div>
    </div>
  </div>
</template>
