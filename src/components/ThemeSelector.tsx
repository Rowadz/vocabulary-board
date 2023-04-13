import { useEffect, memo } from 'react'
const KEY = 'vocabulary-board-theme'

export const ThemeSelector = memo(() => {
  useEffect(() => {
    const theme = localStorage.getItem(KEY) || 'night'
    const html = document.getElementsByTagName('html').item(0)
    html?.setAttribute('data-theme', theme)
  }, [])
  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = event.target as HTMLElement
    let theme = localStorage.getItem(KEY) || 'night'
    if (
      target.classList.contains('flex-grow') &&
      target.classList.contains('text-sm') &&
      target.classList.contains('font-bold')
    ) {
      theme = target.innerText
    } else {
      theme =
        target.querySelector('.flex-grow, .text-sm, .font-bold')?.innerHTML ||
        theme
    }

    const html = document.getElementsByTagName('html').item(0)

    html?.setAttribute('data-theme', theme)
    localStorage.setItem(KEY, theme)
  }

  return (
    <>
      <div title="Change Theme" className="dropdown">
        <div tabIndex={0} className="btn gap-1 normal-case btn-ghost">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
            ></path>
          </svg>{' '}
          <span className="hidden md:inline">Theme</span>{' '}
          <svg
            width="12px"
            height="12px"
            className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 2048 2048"
          >
            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
          </svg>
        </div>
        <div
          onClick={onClick}
          className="z-50 dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16"
        >
          <div className="grid grid-cols-1 gap-3 p-3" tabIndex={0}>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="light"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="light"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">light</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="dark"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="dark"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">dark</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="cupcake"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="cupcake"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">cupcake</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="bumblebee"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="bumblebee"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">bumblebee</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="emerald"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="emerald"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">emerald</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="corporate"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="corporate"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">corporate</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="synthwave"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="synthwave"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">synthwave</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="retro"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="retro"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">retro</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="cyberpunk"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="cyberpunk"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">cyberpunk</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="valentine"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="valentine"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">valentine</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="halloween"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="halloween"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">halloween</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="garden"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="garden"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">garden</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="forest"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="forest"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">forest</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="aqua"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="aqua"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">aqua</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="lofi"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="lofi"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">lofi</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="pastel"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="pastel"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">pastel</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="fantasy"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="fantasy"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">fantasy</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="wireframe"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="wireframe"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">wireframe</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="black"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="black"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">black</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="luxury"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="luxury"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">luxury</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="dracula"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="dracula"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">dracula</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="cmyk"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="cmyk"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">cmyk</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="autumn"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="autumn"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">autumn</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="business"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="business"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">business</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="acid"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="acid"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">acid</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="lemonade"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="lemonade"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">lemonade</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="night"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="night"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">night</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="coffee"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="coffee"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">coffee</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className="outline-base-content overflow-hidden rounded-lg text-left"
              data-set-theme="winter"
              data-act-className="[&amp;_svg]:visible"
            >
              <div
                data-theme="winter"
                className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 invisible"
                    >
                      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                    </svg>{' '}
                    <div className="flex-grow text-sm font-bold">winter</div>{' '}
                    <div className="flex flex-shrink-0 flex-wrap gap-1 h-full">
                      <div className="bg-primary w-2 rounded"></div>{' '}
                      <div className="bg-secondary w-2 rounded"></div>{' '}
                      <div className="bg-accent w-2 rounded"></div>{' '}
                      <div className="bg-neutral w-2 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </button>{' '}
          </div>
        </div>
      </div>
    </>
  )
})
