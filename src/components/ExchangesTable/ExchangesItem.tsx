import React from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';

import {
  addExchangeWatchListItem,
  removeExchangeWatchListItem,
} from '../../redux/watchlist/watchlistSlice';

type ExchangesItemProps = {
  id: string;
  index?: number;
  name?: string;
  score?: string;
  volumeInBtc24H?: string;
  year_established?: string;
  markets?: number;
  coins?: number;
  logo?: string;
};

function ExchangesItem({
  id,
  index,
  name,
  score,
  volumeInBtc24H,
  year_established,
  markets,
  coins,
  logo,
}: ExchangesItemProps) {
  const dispatch = useAppDispatch();
  const exchangeWatchlist = useAppSelector((state) => state.watchlist.exchange);

  const handleAddExchnageToWatchlist = () => {
    dispatch(addExchangeWatchListItem(id));
  };

  const handleRemoveExchnageFromWatchlist = () => {
    dispatch(removeExchangeWatchListItem(id));
  };

  const getScoreColor = (score: string) => {
    switch (parseInt(score, 10)) {
      case 10:
      case 9:
        return 'green';
      case 8 || 7 || 6:
        return 'orange';
      default:
        return 'red';
    }
  };

  return (
    <tr>
      <td>
        <div className="td-ex-numbering">
          {JSON.parse(exchangeWatchlist ? exchangeWatchlist : '[]').includes(id) ? (
            <svg
              onClick={handleRemoveExchnageFromWatchlist}
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                <path
                  d="M2.90968 12.4832C2.76725 12.4832 2.62581 12.4388 2.5051 12.3515C2.28025 12.1885 2.17521 11.9084 2.23641 11.6382L3.07274 7.95414L0.236451 5.46679C0.0279647 5.28478 -0.0516805 4.99655 0.0339158 4.73282C0.119512 4.46959 0.352398 4.28322 0.628131 4.25773L4.38088 3.91703L5.86459 0.444873C5.97399 0.18977 6.22314 0.0250244 6.49996 0.0250244C6.77679 0.0250244 7.02594 0.18977 7.13534 0.444278L8.61904 3.91703L12.3712 4.25773C12.6475 4.28262 12.8804 4.46959 12.966 4.73282C13.0516 4.99606 12.9725 5.28478 12.764 5.46679L9.92769 7.95364L10.764 11.6376C10.8253 11.9084 10.7202 12.1885 10.4954 12.351C10.2712 12.5135 9.97212 12.526 9.73596 12.384L6.49996 10.4502L3.26396 12.3851C3.15456 12.4501 3.03266 12.4832 2.90968 12.4832V12.4832ZM6.49996 9.61717C6.62295 9.61717 6.74475 9.6502 6.85425 9.71516L9.90825 11.5417L9.11893 8.06463C9.0626 7.81716 9.14661 7.55879 9.33783 7.39137L12.0159 5.04267L8.47275 4.72092C8.21764 4.69761 7.99825 4.53723 7.89857 4.30216L6.49996 1.0255L5.09967 4.30266C5.00108 4.53614 4.78169 4.69652 4.52718 4.71983L0.98351 5.04158L3.6615 7.39027C3.85332 7.55819 3.93723 7.81607 3.8804 8.06413L3.09168 11.5411L6.14567 9.71516C6.25508 9.6502 6.37697 9.61717 6.49996 9.61717V9.61717ZM4.35222 3.98418C4.35222 3.98418 4.35222 3.98477 4.35162 3.98527L4.35222 3.98418ZM8.64662 3.98259L8.64721 3.98368C8.64721 3.98308 8.64721 3.98308 8.64662 3.98259Z"
                  fill="#7500BD"
                />
                <path
                  d="M6.35277 6.75993C6.25461 6.62087 6.21266 6.47678 6.07184 6.37116C5.98212 6.30387 5.90229 6.22806 5.80509 6.17252C5.77025 6.15262 5.74176 6.08369 5.70009 6.07178C5.59406 6.04149 5.49386 6.04482 5.38227 6.04482C5.27582 6.04482 5.12161 6.01499 5.01904 6.0505C4.93969 6.07796 4.86843 6.12144 4.78208 6.12144C4.59285 6.12144 4.43806 6.05175 4.2571 6.00651C4.19383 5.9907 4.1276 6.00449 4.06556 5.98807C4.02328 5.97688 4.00654 5.92782 3.96482 5.91854C3.88922 5.90174 3.79409 5.91787 3.72219 5.88591C3.60131 5.83219 3.4384 5.79636 3.31356 5.78943C3.16675 5.78127 3.02368 5.68727 2.86519 5.68727C2.68526 5.68727 2.54818 5.58511 2.38136 5.58511C2.28532 5.58511 2.19463 5.58466 2.10184 5.55815C2.05527 5.54485 2.01238 5.50849 1.95996 5.50849C1.90044 5.50849 1.86599 5.48644 1.80672 5.48295C1.76168 5.4803 1.70811 5.39155 1.65206 5.38221C1.6109 5.37535 1.52879 5.35263 1.50024 5.31694C1.48908 5.303 1.43967 5.30401 1.4747 5.28431C1.52467 5.2562 1.57679 5.21958 1.63362 5.20769C1.81419 5.16989 2.00517 5.17648 2.18981 5.17648C2.3206 5.17648 2.56981 5.17476 2.68783 5.11121C2.77318 5.06525 2.85784 5.06601 2.93614 5.00337C3.01296 4.94191 3.1386 4.9717 3.22275 4.93243C3.3589 4.86889 3.59249 4.82467 3.74205 4.81892C3.94946 4.81094 4.15438 4.79338 4.36068 4.79338"
                  stroke="#7500BD"
                  strokeLinecap="round"
                />
                <path
                  d="M0.963867 4.97217C1.01121 5.03655 1.08258 5.10743 1.1171 5.17649"
                  stroke="#7500BD"
                  strokeLinecap="round"
                />
                <path
                  d="M4.07972 5.17648C4.1141 5.17086 4.50999 5.1062 4.51389 5.17648C4.52116 5.3074 4.6394 5.27863 4.74375 5.27863C5.04114 5.27863 5.14526 4.96396 5.19779 4.71392C5.21835 4.61605 5.3091 4.30813 5.13961 4.30813C5.05352 4.30813 4.78664 4.58776 4.82179 4.67562C4.82747 4.68983 4.95265 4.56669 4.96509 4.55217C5.045 4.45895 5.1624 4.39211 5.24886 4.30245C5.33757 4.21046 5.42821 3.96729 5.46453 3.84841C5.48857 3.76973 5.52598 3.69872 5.54825 3.61856C5.56981 3.54092 5.65213 3.48983 5.66176 3.41282C5.6761 3.29808 5.76539 3.20042 5.78945 3.09216C5.80588 3.01825 5.86583 2.89403 5.91857 2.83818C5.96042 2.79387 5.96477 2.74623 5.97107 2.68636C5.97701 2.62989 6.02739 2.5722 6.05194 2.52035C6.09631 2.42668 6.09685 2.32416 6.12431 2.22807C6.17016 2.06757 6.21238 1.91036 6.2818 1.75417C6.30479 1.70244 6.37512 1.62919 6.37828 1.57539C6.39022 1.37255 6.38747 1.58905 6.41659 1.66478C6.59108 2.11844 6.5826 2.56419 6.5826 3.04534C6.5826 3.21631 6.56641 3.36546 6.52017 3.53059C6.49377 3.62486 6.49885 3.72986 6.44923 3.8172C6.39212 3.91771 6.32396 4.01888 6.27613 4.12368C6.15444 4.39022 5.99679 4.66362 5.81641 4.89554C5.70683 5.03643 5.70948 5.20253 5.64899 5.35809C5.58855 5.5135 5.56102 5.67996 5.56102 5.84618C5.56102 5.85345 5.56283 5.97414 5.56385 5.97388C5.59443 5.96624 5.63024 5.83637 5.64047 5.81497C5.69638 5.69806 5.78347 5.60205 5.83628 5.48295C5.934 5.26256 6.05768 5.04827 6.13566 4.82034C6.18051 4.68924 6.24144 4.49636 6.22221 4.76075C6.20023 5.06296 5.99033 5.30959 5.88168 5.58511C5.78702 5.82513 5.67949 6.08761 5.54825 6.31015C5.47056 6.44187 5.41064 6.65777 5.229 6.65777C4.68463 6.65777 4.14026 6.65777 3.59588 6.65777C3.46809 6.65777 3.36983 6.61597 3.24684 6.60528C3.14681 6.59658 3.04532 6.59483 2.98009 6.51872C2.89783 6.42275 2.85496 6.27049 2.75733 6.19239C2.70911 6.15381 2.66379 6.0959 2.59842 6.0959C2.55092 6.0959 2.52201 6.06967 2.57855 6.13563C2.69742 6.27431 2.89747 6.33762 3.02975 6.46481C3.16851 6.59822 3.32155 6.7135 3.46677 6.83797C3.52062 6.88413 3.54431 6.95382 3.59446 7.00398C3.62455 7.03406 3.68176 7.05703 3.7023 7.09195C3.90952 7.44422 4.10526 7.7451 4.10526 8.16461C4.10526 8.31396 4.04193 8.45372 4.00877 8.59879C3.97796 8.73359 3.98783 8.86663 3.94067 8.99465C3.90486 9.09184 3.91536 9.15475 3.86405 9.25005C3.8366 9.30102 3.85389 9.36229 3.83 9.41605C3.80835 9.46476 3.77878 9.54218 3.77324 9.59483C3.76119 9.70929 3.67783 9.81215 3.67108 9.92685C3.66926 9.95775 3.62889 9.98263 3.62142 10.0162C3.6107 10.0645 3.63834 10.1277 3.60582 10.1695C3.49759 10.3086 3.53149 10.5091 3.46109 10.6675C3.43254 10.7317 3.43798 10.8248 3.39582 10.8775C3.36866 10.9114 3.34372 11.0876 3.29934 11.1003C3.25569 11.1127 3.14469 11.242 3.26245 11.1159C3.43267 10.9335 3.60101 10.7879 3.80446 10.642C3.97709 10.5181 4.20791 10.4699 4.38619 10.3412C4.56097 10.2149 4.74133 10.1075 4.92111 9.9907C5.04747 9.90856 5.17717 9.79635 5.29143 9.69841C5.52946 9.49438 4.76666 10.0436 4.48835 10.1879C4.39198 10.2379 4.32012 10.2966 4.24572 10.371C4.21828 10.3984 4.13326 10.4688 4.09958 10.483C3.99597 10.5269 3.88577 10.5777 3.81013 10.6533C3.73244 10.731 3.59905 10.7962 3.50649 10.8491C3.41653 10.9005 3.3314 10.9958 3.25677 11.0705C3.23291 11.0943 3.13212 11.2156 3.13475 11.1669C3.14835 10.9153 3.37529 10.6349 3.51926 10.4391C3.64431 10.269 3.77139 10.1298 3.9208 9.9836C4.13717 9.77194 4.33603 9.54604 4.46281 9.26849C4.5928 8.98393 4.76752 8.65477 4.81895 8.34623C4.86576 8.06537 4.87369 7.77208 4.8984 7.48781C4.91979 7.24193 4.99899 7.00021 5.0559 6.75993C5.07296 6.6879 5.1034 6.56116 5.09705 6.73581C5.08256 7.13428 4.91695 7.56406 4.76929 7.92908C4.65345 8.21542 4.50056 8.47679 4.34079 8.73642C4.31045 8.78572 4.33997 8.50297 4.3493 8.44697C4.36617 8.34578 4.39508 8.05456 4.4316 8.15042C4.55515 8.47474 4.28377 8.96708 4.13789 9.23018C3.97523 9.52355 3.76537 9.80549 3.65689 10.1255C3.58105 10.3492 3.51198 10.5704 3.44123 10.7952C3.39923 10.9286 3.32862 11.0935 3.31353 11.2294C3.30329 11.3215 3.12957 11.4938 3.04678 11.5089C2.99461 11.5184 2.96554 11.6126 2.98719 11.5103C3.03775 11.2713 3.27126 11.0864 3.41569 10.9044C3.68545 10.5645 3.90236 10.1734 4.1535 9.81901C4.29535 9.61887 4.44451 9.42562 4.58483 9.22593C4.66392 9.11339 4.7098 8.99134 4.77496 8.87405C4.92304 8.60751 5.09149 8.3493 5.24319 8.08232C5.37308 7.85371 5.48632 7.58742 5.57237 7.33883C5.62465 7.18779 5.68106 7.03836 5.73412 6.88763C5.75244 6.83557 5.7648 6.69378 5.80648 6.6521C5.8998 6.55878 5.86142 6.91178 5.86465 7.04371C5.87327 7.39501 5.86619 7.73766 5.76533 8.07664C5.6353 8.51368 5.43063 8.91449 5.31129 9.35362C5.27857 9.47407 5.18673 9.8278 5.25596 9.72395C5.29301 9.66837 5.30186 9.53947 5.31981 9.47707C5.37005 9.30242 5.41748 9.12766 5.45886 8.95066C5.56522 8.49567 5.6593 8.03314 5.74689 7.57436C5.79789 7.3072 5.84195 7.03698 5.84195 6.76419C5.84195 6.64706 5.85092 6.5984 5.87884 6.75709C5.9503 7.16325 5.99242 7.55521 5.95404 7.96881C5.93155 8.21122 5.83323 8.45108 5.84195 8.69527C5.85166 8.96718 6.00954 8.17691 6.07181 7.91205C6.40077 6.51282 6.5826 5.0864 6.5826 3.64977C6.5826 3.54951 6.5826 3.44924 6.5826 3.34897C6.5826 3.25002 6.61011 3.45872 6.61098 3.46248C6.71926 3.93427 6.78692 4.41965 6.78692 4.90405C6.78692 5.00168 6.7832 5.10022 6.78834 5.19776C6.79151 5.25798 6.81118 5.349 6.81246 5.22472C6.81714 4.77031 6.81246 4.31561 6.81246 3.86118C6.81246 3.42215 6.81631 2.9935 6.85786 2.55724C6.88979 2.22202 6.99035 2.59148 7.03664 2.73035C7.08012 2.8608 7.11771 2.99351 7.15866 3.12479C7.18546 3.21071 7.18256 3.31601 7.22393 3.3958C7.27402 3.4924 7.33317 3.56878 7.37433 3.67531C7.38485 3.70255 7.42642 3.83323 7.42399 3.81862C7.40483 3.70365 7.31546 3.60983 7.26224 3.50931C7.19881 3.3895 7.29188 3.58028 7.30339 3.61288C7.39343 3.868 7.4573 4.1249 7.52899 4.38475C7.67424 4.91128 7.85289 5.42527 7.99012 5.95402C8.07661 6.28727 8.13743 6.63084 8.19727 6.96992C8.27048 7.38475 8.21714 7.84527 8.21714 8.26535C8.21714 8.52616 8.18934 8.86557 8.01424 9.06985C7.89999 9.20313 7.58418 8.64863 7.55594 8.61014C7.17853 8.09567 6.74152 7.62819 6.41659 7.07634C6.22301 6.74756 6.0542 6.39924 6.04627 6.01077C6.04592 5.99348 6.03752 5.94178 6.06897 5.97672C6.21134 6.1349 6.27929 6.37778 6.35133 6.57122C6.44587 6.8251 6.5203 7.08068 6.58118 7.34451C6.61993 7.51242 6.63684 7.71381 6.7103 7.87233C6.74753 7.95268 6.77937 7.83765 6.78976 7.80706C6.85484 7.61543 6.91107 7.42013 6.96569 7.22532C7.084 6.80345 7.21452 6.36037 7.24663 5.9228C7.26033 5.73616 7.27965 5.55023 7.29487 5.36377C7.30707 5.21437 7.32805 5.43634 7.3346 5.46592C7.44565 5.96723 7.54155 6.47207 7.58858 6.98411C7.62934 7.42794 7.60419 7.8826 7.60419 8.32778C7.60419 8.37881 7.63426 8.74474 7.59283 8.51365C7.51063 8.05503 7.37226 7.59199 7.24947 7.14303C7.15056 6.78141 7.13972 6.41972 7.08772 6.0505C7.04698 5.76126 7.08172 6.26841 7.08772 6.31725C7.17128 6.9981 7.29771 7.67695 7.29771 8.36467C7.29771 8.64307 7.30277 8.92202 7.29771 9.20039C7.2943 9.38775 6.96013 9.3139 6.84509 9.3139C6.62279 9.3139 6.49884 9.35147 6.28889 9.4274C6.23645 9.44637 6.16128 9.47981 6.10302 9.47565C6.01338 9.46924 6.18156 9.31189 6.23923 9.24295C6.39371 9.0583 6.57626 8.89506 6.71881 8.70094C6.80771 8.57989 6.88745 8.45758 6.98556 8.34339C7.04194 8.27777 7.11893 8.10893 7.11893 8.26961C7.11893 8.5856 6.92421 8.90163 6.75003 9.15498C6.57942 9.40314 6.34621 9.69212 6.08883 9.8559C6.06404 9.87168 6.07131 9.73474 6.07181 9.72253C6.07689 9.59897 6.12218 9.4684 6.16545 9.35362C6.2652 9.08908 6.48971 8.81654 6.6876 8.61865C6.69103 8.61522 6.85296 8.45993 6.86354 8.46257C6.93771 8.48112 7.05933 8.93676 7.08204 9.00742C7.17037 9.28222 7.21777 9.57098 7.30906 9.84739C7.3534 9.98164 7.39551 10.1367 7.47507 10.256C7.50504 10.301 7.5334 10.3371 7.47081 10.3355C7.30317 10.3312 7.27174 10.1657 7.24663 10.0276C7.22079 9.88547 7.19555 9.72758 7.19555 9.58348C7.19555 9.35935 7.60443 9.82261 7.6354 9.87009C7.85201 10.2022 8.10489 10.508 8.34484 10.808C8.39766 10.874 8.36769 10.7166 8.3647 10.693C8.34559 10.5423 8.32302 10.3785 8.26964 10.2362C8.23936 10.1554 8.21336 10.0706 8.21714 9.9836C8.21777 9.96902 8.33955 10.1459 8.34909 10.1581C8.44894 10.2859 8.55458 10.4088 8.65415 10.537C8.85904 10.8007 9.03835 11.0976 9.26994 11.3372C9.33601 11.4056 9.40218 11.4845 9.48135 11.5373C9.51734 11.5613 9.53207 11.6224 9.55939 11.638C9.68117 11.7076 9.72398 11.7729 9.72398 11.55C9.72398 11.2615 9.43614 11.0019 9.25007 10.7952C9.15022 10.6843 8.99762 10.4803 8.95211 10.3355C8.86086 10.0451 8.59157 9.84957 8.52361 9.54375C8.45392 9.23016 8.26822 8.94653 8.26822 8.62433"
                  stroke="#7500BD"
                  strokeLinecap="round"
                />
                <path
                  d="M3.62003 6.6067C3.84557 6.72399 4.06391 6.8586 4.26419 7.01534C4.41626 7.13435 4.5557 7.28434 4.71823 7.38708C4.90851 7.50737 5.10242 7.61887 5.29429 7.73612C5.39202 7.79585 5.48876 7.88586 5.58658 7.93477"
                  stroke="#7500BD"
                  strokeLinecap="round"
                />
                <path
                  d="M8.11499 8.54771C8.14556 8.47639 8.33118 8.10707 8.45126 8.25117C8.62806 8.46332 8.72223 8.75884 8.84996 9.00175C8.96123 9.21335 9.06318 9.43696 9.15928 9.65585C9.2442 9.84928 9.3616 10.0695 9.41893 10.2702C9.43663 10.3322 9.46536 10.4291 9.44163 10.2986C9.40249 10.0833 9.42942 9.86106 9.41184 9.64024C9.38111 9.2544 9.26427 8.88859 9.26427 8.50231C9.26427 8.03927 9.23873 7.58018 9.23873 7.11749"
                  stroke="#7500BD"
                  strokeLinecap="round"
                />
                <path
                  d="M8.08945 9.00742C8.12075 8.71526 8.23037 8.45655 8.28241 8.17029C8.33313 7.89133 8.33726 7.6281 8.43281 7.35586C8.55728 7.00125 8.72528 6.69436 8.91239 6.37117C9.03796 6.15427 9.12619 5.91235 9.23873 5.68727"
                  stroke="#7500BD"
                  strokeLinecap="round"
                />
                <path
                  d="M9.54519 6.3513C9.42023 6.32787 9.31927 6.26863 9.19899 6.23495C9.00012 6.17927 8.81119 6.12204 8.62576 6.03064C8.40877 5.92367 8.20168 5.79447 7.98727 5.68727"
                  stroke="#7500BD"
                  strokeLinecap="round"
                />
                <path
                  d="M8.31931 5.07433C8.49913 5.07433 8.68079 5.09987 8.85564 5.09987"
                  stroke="#7500BD"
                  strokeLinecap="round"
                />
                <path d="M8.21715 4.76785L8.08945 4.71677" stroke="#7500BD" strokeLinecap="round" />
                <path
                  d="M7.91068 4.6657C8.05211 4.80309 8.2126 4.92116 8.38032 5.02325C8.51221 5.10353 8.67544 5.12846 8.81733 5.20203C8.9352 5.26315 9.06106 5.28937 9.16212 5.3808C9.20578 5.42031 9.26519 5.45788 9.31535 5.48296"
                  stroke="#7500BD"
                  strokeLinecap="round"
                />
                <path
                  d="M9.34088 5.61066C9.34088 5.76015 9.39196 5.88497 9.39196 6.03206C9.39196 6.16402 9.39196 6.29597 9.39196 6.42792"
                  stroke="#7500BD"
                  strokeLinecap="round"
                />
                <path
                  d="M8.83011 7.57721C8.92351 7.31256 9.14061 7.16641 9.3409 6.98838C9.48509 6.86021 9.61612 6.80033 9.78926 6.72163C10.0427 6.60641 10.3328 6.55398 10.4916 6.31584C10.5313 6.25635 10.6376 6.2176 10.6633 6.14699C10.6777 6.10729 10.7519 6.00165 10.7967 5.99375C10.8411 5.98591 10.9159 5.88713 10.9641 5.86038C10.9888 5.84665 11.0699 5.78522 11.0833 5.7639C11.1053 5.72861 11.2644 5.64126 11.3075 5.6362C11.3764 5.62809 11.5232 5.50827 11.577 5.45742C11.621 5.41592 11.7388 5.29741 11.7388 5.24033C11.7388 5.18804 10.8812 5.2531 10.7839 5.2531C10.6311 5.2531 10.4765 5.27503 10.3355 5.21338C10.2583 5.17957 10.1979 5.14809 10.1298 5.11405C10.088 5.09315 10.0142 5.04879 9.96662 5.04879C9.82776 5.04879 9.69493 4.97217 9.55089 4.97217C9.4809 4.97217 9.4109 4.97217 9.3409 4.97217C9.21674 4.97217 9.35758 5.03951 9.40617 5.08C9.47207 5.13492 9.50768 5.22452 9.56224 5.28999C9.61868 5.35772 9.69097 5.41244 9.74386 5.48296C9.79394 5.54974 9.84344 5.6166 9.90277 5.67593C9.96237 5.73553 10.0305 5.87812 10.0305 5.96821"
                  stroke="#7500BD"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              onClick={handleAddExchnageToWatchlist}
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.90968 12.4832C2.76725 12.4832 2.62581 12.4388 2.5051 12.3515C2.28025 12.1885 2.17521 11.9084 2.23641 11.6382L3.07274 7.95414L0.236451 5.46679C0.0279647 5.28478 -0.0516805 4.99655 0.0339158 4.73282C0.119512 4.46959 0.352398 4.28322 0.628131 4.25773L4.38088 3.91703L5.86459 0.444873C5.97399 0.18977 6.22314 0.0250244 6.49996 0.0250244C6.77679 0.0250244 7.02594 0.18977 7.13534 0.444278L8.61904 3.91703L12.3712 4.25773C12.6475 4.28262 12.8804 4.46959 12.966 4.73282C13.0516 4.99606 12.9725 5.28478 12.764 5.46679L9.92769 7.95364L10.764 11.6376C10.8253 11.9084 10.7202 12.1885 10.4954 12.351C10.2712 12.5135 9.97212 12.526 9.73596 12.384L6.49996 10.4502L3.26396 12.3851C3.15456 12.4501 3.03267 12.4832 2.90968 12.4832ZM6.49996 9.61717C6.62295 9.61717 6.74475 9.6502 6.85425 9.71516L9.90825 11.5417L9.11893 8.06463C9.0626 7.81716 9.14661 7.55879 9.33783 7.39137L12.0159 5.04267L8.47275 4.72092C8.21764 4.69761 7.99825 4.53723 7.89857 4.30216L6.49996 1.0255L5.09967 4.30266C5.00108 4.53614 4.78169 4.69652 4.52718 4.71983L0.98351 5.04158L3.6615 7.39027C3.85332 7.55819 3.93723 7.81607 3.8804 8.06413L3.09168 11.5411L6.14568 9.71516C6.25508 9.6502 6.37697 9.61717 6.49996 9.61717ZM4.35222 3.98418C4.35222 3.98418 4.35222 3.98477 4.35162 3.98527L4.35222 3.98418ZM8.64662 3.98259L8.64721 3.98368C8.64721 3.98308 8.64721 3.98308 8.64662 3.98259Z"
                fill="#989898"
              />
            </svg>
          )}
          <span>{index}</span>
        </div>
      </td>
      <td className="td-ex-name">
        <div className="td-ex-name-block">
          <img className="ex-logo" width={20} src={logo} alt={name} />
          <p>{name}</p>
        </div>
      </td>
      <td>
        <div className={`ex-score-colored ${getScoreColor(score as string)}`}>
          <p>{score}</p>
        </div>
      </td>
      <td>
        <p>{volumeInBtc24H && Number(volumeInBtc24H).toFixed(2)}</p>
      </td>
      <td>
        <p>{year_established}</p>
      </td>
      <td>
        <p>{markets}</p>
      </td>
      <td>
        <p>{coins}</p>
      </td>
    </tr>
  );
}

export default ExchangesItem;
