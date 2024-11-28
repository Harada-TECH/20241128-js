/*
ローディングから画面遷移
================================================ */
const loadingAreaGray = document.querySelector('#loading');
const loadingAreaGreen = document.querySelector('#loading-screen');
const loadingText = document.querySelector('#loading p');

window.addEventListener('load', () => {
  // ローディング中（ぼかし画面）  
  loadingAreaGray.animate(
    // 動かす内容
    {
      backgroundFilter: ['blur(10px)', 'blur(0)'],
      background: ['rgba(238, 221, 136, 1)', 'rgba(238, 221, 136, 0)'],
      visibility: 'hidden',
    },
    // 動きの詳細
    {
      duration: 2000,
      delay: 1200,
      eading: 'ease',
      fill: 'forwards',
    }
  );

  // ローディング中テキスト
  loadingText.animate(
    // 動かす内容
    [
      {
        opacity: 1,
        offset: .8,  // 80%
      },
      {
        opacity: 0,
        offset: 1,  // 100%
      }
    ],
    // 動きの詳細
    {
      duration: 1200,
      eading: 'ease',
      fill: 'forwards',
    }
  );
});