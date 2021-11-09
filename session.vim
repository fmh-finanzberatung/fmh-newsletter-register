let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/projects/node.js/fmh-newsletter-register
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 ~/projects/node.js/fmh-newsletter-register
badd +43 src/AppGallery.svelte
badd +3 src/AppArticleTeasers.svelte
badd +1 src/AppAwardsTable.svelte
badd +7 src/main-awards-table.js
argglobal
%argdel
edit src/main-awards-table.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 101 + 101) / 203)
exe 'vert 2resize ' . ((&columns * 90 + 101) / 203)
exe 'vert 3resize ' . ((&columns * 10 + 101) / 203)
argglobal
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 5 - ((4 * winheight(0) + 44) / 88)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 5
normal! 0
lcd ~/projects/node.js/fmh-newsletter-register
wincmd w
argglobal
if bufexists("~/projects/node.js/fmh-newsletter-register/src/AppAwardsTable.svelte") | buffer ~/projects/node.js/fmh-newsletter-register/src/AppAwardsTable.svelte | else | edit ~/projects/node.js/fmh-newsletter-register/src/AppAwardsTable.svelte | endif
if &buftype ==# 'terminal'
  silent file ~/projects/node.js/fmh-newsletter-register/src/AppAwardsTable.svelte
endif
setlocal fdm=indent
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=10
setlocal nofen
let s:l = 42 - ((41 * winheight(0) + 44) / 88)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 42
normal! 015|
lcd ~/projects/node.js/fmh-newsletter-register
wincmd w
argglobal
enew
file ~/projects/node.js/fmh-newsletter-register/-MINIMAP-
balt ~/projects/node.js/fmh-newsletter-register/src/main-awards-table.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=1
setlocal fml=1
setlocal fdn=10
setlocal nofen
lcd ~/projects/node.js/fmh-newsletter-register
wincmd w
exe 'vert 1resize ' . ((&columns * 101 + 101) / 203)
exe 'vert 2resize ' . ((&columns * 90 + 101) / 203)
exe 'vert 3resize ' . ((&columns * 10 + 101) / 203)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0&& getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOF
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
