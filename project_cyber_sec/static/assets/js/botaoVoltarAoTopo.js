window.onscroll = function () {
  voltarAoTopo();
};


function voltarAoTopo() {
  const linkVoltarAoTopo = document.getElementById('link-voltar-ao-topo');

  if(document.documentElement.scrollTop > 100) {
    linkVoltarAoTopo.style.display = 'flex';
  } else {
      linkVoltarAoTopo.style.display = 'none';
    }
}

const linkTopo = document.querySelector('[data-link-voltar-ao-topo]');
linkTopo.addEventListener('click', () => {
  window.scroll(0, 0);
});
