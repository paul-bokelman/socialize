import React from "react";

export const IconDisplay = (): JSX.Element => {
  const icons = [
    <Twitter key={1} />,
    <Github key={2} />,
    <OpenSea key={3} />,
    <Discord key={4} />,
    <Facebook key={5} />,
    <Twitch key={6} />,
    <Youtube key={7} />,
    <Instagram key={8} />,
    <Dribbble key={9} />,
    <LinkedIn key={10} />,
    <Snapchat key={11} />,
    <Reddit key={12} />,
    <Tiktok key={13} />,
    <Stackoverflow key={14} />,
    <Steam key={15} />,
    <Web key={15} />,
  ];

  return (
    <div className="-mt-5 -mb-3 w-full flex items-center justify-center">
      <div className="px-3 py-2 w-full md:w-1/2 flex flex-row flex-wrap items-center justify-between bg-[#57606A15] dark:bg-[#6f788130]  rounded-md">
        {icons.map((icon) => icon)}
      </div>
    </div>
  );
};

const Twitter = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1445"
      data-name="Rectangle 1445"
      width="20"
      height="20"
      rx="4"
      fill="#1d9bf0"
    />
    <path
      id="Path_36"
      data-name="Path 36"
      d="M3.77,11.75a6.957,6.957,0,0,0,7.006-7c0-.105,0-.212,0-.317A5.014,5.014,0,0,0,12,3.156a4.993,4.993,0,0,1-1.417.389,2.476,2.476,0,0,0,1.085-1.363,4.9,4.9,0,0,1-1.565.595,2.465,2.465,0,0,0-4.2,2.246A6.994,6.994,0,0,1,.831,2.451a2.467,2.467,0,0,0,.764,3.287A2.492,2.492,0,0,1,.48,5.431v.034A2.466,2.466,0,0,0,2.454,7.878a2.4,2.4,0,0,1-.649.086,2.423,2.423,0,0,1-.461-.043,2.462,2.462,0,0,0,2.3,1.708,4.941,4.941,0,0,1-3.06,1.055A4.74,4.74,0,0,1,0,10.651a7.008,7.008,0,0,0,3.769,1.1Z"
      transform="translate(5 3.103)"
      fill="#fff"
    />
  </svg>
);

const Github = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1446"
      data-name="Rectangle 1446"
      width="20"
      height="20"
      rx="4"
    />
    <path
      id="Path_37"
      data-name="Path 37"
      d="M6,0A6,6,0,0,0,4.1,11.693c.3.053.413-.127.413-.285,0-.142-.008-.615-.008-1.117-1.507.277-1.9-.368-2.017-.7a2.182,2.182,0,0,0-.615-.847c-.21-.113-.51-.39-.008-.4a1.2,1.2,0,0,1,.923.615,1.282,1.282,0,0,0,1.747.495,1.262,1.262,0,0,1,.382-.8C3.585,8.5,2.19,7.98,2.19,5.685A2.335,2.335,0,0,1,2.8,4.073a2.156,2.156,0,0,1,.06-1.59s.5-.158,1.65.615a5.657,5.657,0,0,1,3,0c1.148-.78,1.65-.615,1.65-.615a2.156,2.156,0,0,1,.06,1.59A2.322,2.322,0,0,1,9.84,5.685c0,2.3-1.4,2.813-2.737,2.963a1.421,1.421,0,0,1,.4,1.11c0,.8-.008,1.448-.008,1.65,0,.158.112.345.413.285A6,6,0,0,0,6,0Z"
      transform="translate(4 4.148)"
      fill="#fff"
    />
  </svg>
);

const OpenSea = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1447"
      data-name="Rectangle 1447"
      width="20"
      height="20"
      rx="4"
      fill="#2181e2"
    />
    <g
      id="Group_274"
      data-name="Group 274"
      transform="translate(-144.738 -516.882)"
    >
      <path
        id="Union_85"
        data-name="Union 85"
        d="M3.255,10.8A3.26,3.26,0,0,1,0,7.534V7.477a.087.087,0,0,1,.086-.088H2.915a.1.1,0,0,1,.092.107.972.972,0,0,0,.1.543A1,1,0,0,0,4,8.594H5.4V7.5H4.016a.089.089,0,0,1-.072-.141l.05-.074c.131-.186.318-.475.5-.8a6.324,6.324,0,0,0,.349-.7c.02-.043.036-.087.052-.13.027-.075.055-.146.075-.218s.036-.123.052-.182a2.833,2.833,0,0,0,.067-.638c0-.087,0-.178-.012-.265s-.016-.191-.028-.285S5.03,3.9,5.014,3.813c-.021-.127-.049-.253-.08-.38l-.012-.048c-.023-.087-.043-.17-.072-.257-.078-.273-.169-.539-.266-.787-.035-.1-.075-.195-.115-.289-.058-.143-.119-.273-.174-.4C4.268,1.6,4.244,1.548,4.22,1.5s-.055-.118-.084-.173-.042-.083-.059-.123L3.907.883A.056.056,0,0,1,3.97.8l1.07.29h.007l.141.039.155.043.057.016V.556A.554.554,0,0,1,5.95,0a.542.542,0,0,1,.389.163A.56.56,0,0,1,6.5.556V1.5l.114.031a.1.1,0,0,1,.026.013l.119.09c.04.032.083.071.135.111.1.083.226.19.361.313.036.031.071.064.1.1.175.162.369.352.555.562.052.059.1.119.155.182s.107.127.155.189c.063.085.131.171.19.263.029.042.06.086.087.129.076.115.143.234.207.353.027.055.055.115.079.174a2.54,2.54,0,0,1,.163.483.582.582,0,0,1,.022.107v.008a.894.894,0,0,1,.021.15,1.671,1.671,0,0,1-.087.709c-.024.068-.048.138-.079.206a2.645,2.645,0,0,1-.215.408c-.027.048-.058.1-.091.147s-.071.1-.1.146-.091.123-.14.179a1.7,1.7,0,0,1-.135.17c-.067.079-.131.154-.2.226-.041.047-.084.1-.128.139s-.086.09-.127.13c-.067.067-.122.119-.17.162l-.11.1a.088.088,0,0,1-.058.023H6.5V8.594H7.572a1,1,0,0,0,.652-.241A7.86,7.86,0,0,0,8.887,7.7a.077.077,0,0,1,.041-.025l2.962-.856A.087.087,0,0,1,12,6.9V7.53a.09.09,0,0,1-.054.082,3.108,3.108,0,0,0-1.146.779c-.712.991-1.256,2.408-2.472,2.408ZM.788,6.3a.086.086,0,0,1-.074-.133L.756,6.1,3.288,2.14a.087.087,0,0,1,.152.012,5.392,5.392,0,0,1,.617,2.861,4.5,4.5,0,0,1-.5,1.089,1.619,1.619,0,0,1-.094.161.086.086,0,0,1-.072.039Z"
        transform="translate(148.739 521.882)"
        fill="#fff"
      />
    </g>
  </svg>
);

const Discord = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1448"
      data-name="Rectangle 1448"
      width="20"
      height="20"
      rx="4"
      fill="#5560ea"
    />
    <path
      id="Path_38"
      data-name="Path 38"
      d="M36.174,32.771a.031.031,0,0,0-.016-.014A9.9,9.9,0,0,0,33.716,32a.037.037,0,0,0-.039.019,6.886,6.886,0,0,0-.3.624,9.14,9.14,0,0,0-2.743,0,6.317,6.317,0,0,0-.309-.624A.039.039,0,0,0,30.281,32a9.871,9.871,0,0,0-2.443.757.035.035,0,0,0-.016.014A10.12,10.12,0,0,0,26.05,39.6a.041.041,0,0,0,.016.028,9.952,9.952,0,0,0,3,1.514.039.039,0,0,0,.042-.014,7.106,7.106,0,0,0,.613-1,.038.038,0,0,0-.021-.053,6.555,6.555,0,0,1-.936-.446.038.038,0,0,1,0-.064c.063-.047.126-.1.186-.146a.037.037,0,0,1,.039-.005,7.1,7.1,0,0,0,6.031,0,.037.037,0,0,1,.039,0c.06.05.123.1.186.146a.038.038,0,0,1,0,.064,6.151,6.151,0,0,1-.937.446.038.038,0,0,0-.02.053,7.981,7.981,0,0,0,.613,1,.038.038,0,0,0,.042.014,9.919,9.919,0,0,0,3-1.514.038.038,0,0,0,.016-.028A10.054,10.054,0,0,0,36.174,32.771ZM30.01,38.236a1.217,1.217,0,0,1,0-2.418,1.217,1.217,0,0,1,0,2.418Zm3.987,0a1.217,1.217,0,0,1,0-2.418,1.217,1.217,0,0,1,0,2.418Z"
      transform="translate(-22 -26.57)"
      fill="#fff"
    />
  </svg>
);

const Facebook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1449"
      data-name="Rectangle 1449"
      width="20"
      height="20"
      rx="4"
      fill="#237cf3"
    />
    <path
      id="Path_42"
      data-name="Path 42"
      d="M12,6.036A6,6,0,1,0,5.06,12V7.781H3.538V6.036H5.061V4.705A2.124,2.124,0,0,1,7.328,2.357a9.177,9.177,0,0,1,1.343.118V3.96H7.914a.87.87,0,0,0-.977.943V6.036H8.6L8.335,7.78h-1.4V12A6.027,6.027,0,0,0,12,6.036Z"
      transform="translate(4.002 4.001)"
      fill="#fff"
    />
  </svg>
);

const Twitch = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1450"
      data-name="Rectangle 1450"
      width="20"
      height="20"
      rx="4"
      fill="#9047ff"
    />
    <g id="Group_276" data-name="Group 276" transform="translate(3.984 5.095)">
      <path
        id="Path_43"
        data-name="Path 43"
        d="M3.09,0,1,2.09V9.615H3.508V11.7L5.6,9.615H7.269l3.763-3.762V0ZM10.2,5.435,8.525,7.106H6.852L5.389,8.569V7.106H3.508V.836H10.2Z"
        fill="#fff"
      />
      <path
        id="Path_44"
        data-name="Path 44"
        d="M11.154,3.143H10.2V6.008h.956Zm-2.628,0H7.571V6.008h.956V3.143Z"
        transform="translate(-2.076 -0.933)"
        fill="#fff"
      />
    </g>
  </svg>
);

const Youtube = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1451"
      data-name="Rectangle 1451"
      width="20"
      height="20"
      rx="4"
      fill="#f20000"
    />
    <path
      id="Path_47"
      data-name="Path 47"
      d="M6.039,2h.067a33.179,33.179,0,0,1,4.583.251,1.508,1.508,0,0,1,1.061,1.065,6.792,6.792,0,0,1,.165,1.052l.008.078.017.2.006.078C11.993,5.4,12,6.046,12,6.186v.056c0,.146-.008.831-.062,1.545l-.006.079-.007.078a7.43,7.43,0,0,1-.176,1.169,1.505,1.505,0,0,1-1.061,1.065,33.982,33.982,0,0,1-4.635.251H5.946c-.232,0-1.19,0-2.2-.039l-.128,0-.065,0-.128-.005L3.3,10.372a12.057,12.057,0,0,1-1.991-.2A1.505,1.505,0,0,1,.25,9.112,7.416,7.416,0,0,1,.074,7.944L.068,7.865.062,7.787Q.006,7.025,0,6.26V6.168c0-.161.008-.719.048-1.334l.005-.077,0-.039L.062,4.64l.017-.2.008-.078A6.777,6.777,0,0,1,.251,3.315,1.505,1.505,0,0,1,1.312,2.25a12.312,12.312,0,0,1,1.991-.2L3.43,2.05l.129,0,.065,0,.128-.005Q4.822,2,5.894,2h.145ZM4.8,4.407V8.02L7.918,6.214Z"
      transform="translate(4 4.001)"
      fill="#fff"
    />
  </svg>
);

const Instagram = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1452"
      data-name="Rectangle 1452"
      width="20"
      height="20"
      rx="4"
      fill="#e4026f"
    />
    <path
      id="Path_46"
      data-name="Path 46"
      d="M118.369,116.269a2,2,0,1,0,2,2A2.005,2.005,0,0,0,118.369,116.269Zm6,2c0-.829.008-1.65-.039-2.477a3.32,3.32,0,0,0-3.484-3.484c-.829-.047-1.65-.039-2.477-.039s-1.65-.008-2.477.039a3.32,3.32,0,0,0-3.484,3.484c-.047.829-.039,1.65-.039,2.477s-.008,1.65.039,2.477a3.32,3.32,0,0,0,3.484,3.484c.829.047,1.65.039,2.477.039s1.65.008,2.477-.039a3.32,3.32,0,0,0,3.484-3.484C124.379,119.92,124.37,119.1,124.37,118.27Zm-6,3.079a3.079,3.079,0,1,1,3.079-3.079A3.074,3.074,0,0,1,118.369,121.349Zm3.2-5.564a.718.718,0,1,1,.509-.21A.718.718,0,0,1,121.573,115.785Z"
      transform="translate(-108.37 -108.271)"
      fill="#fff"
    />
  </svg>
);

const Dribbble = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1454"
      data-name="Rectangle 1454"
      width="20"
      height="20"
      rx="4"
      fill="#de4982"
    />
    <path
      id="Path_50"
      data-name="Path 50"
      d="M6,0a6,6,0,1,0,6,6A6,6,0,0,0,6,0ZM9.963,2.766a5.1,5.1,0,0,1,1.159,3.188,12.123,12.123,0,0,0-3.566-.163c-.039-.084-.072-.175-.111-.266-.1-.247-.221-.5-.338-.742A6.854,6.854,0,0,0,9.964,2.765ZM6,.885A5.114,5.114,0,0,1,9.4,2.174,5.814,5.814,0,0,1,6.71,4.022a27.746,27.746,0,0,0-1.913-3A5.213,5.213,0,0,1,6,.885Zm-2.18.482a32.342,32.342,0,0,1,1.9,2.961,19.233,19.233,0,0,1-4.738.625A5.149,5.149,0,0,1,3.82,1.367ZM.872,6.008V5.85a18.67,18.67,0,0,0,5.265-.728c.149.286.286.579.416.872l-.2.059A8.151,8.151,0,0,0,2.186,9.43,5.113,5.113,0,0,1,.872,6.007ZM6,11.128a5.089,5.089,0,0,1-3.142-1.08,7.028,7.028,0,0,1,4.021-3.2c.013-.007.02-.007.033-.013A21.185,21.185,0,0,1,8,10.718a5.042,5.042,0,0,1-2,.409Zm2.858-.878a22.173,22.173,0,0,0-1-3.651,7.488,7.488,0,0,1,3.188.221,5.081,5.081,0,0,1-2.193,3.43Z"
      transform="translate(4 4)"
      fill="#fff"
      fillRule="evenodd"
    />
  </svg>
);

const LinkedIn = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1453"
      data-name="Rectangle 1453"
      width="20"
      height="20"
      rx="4"
      fill="#0d70a0"
    />
    <path
      id="Path_49"
      data-name="Path 49"
      d="M123.52,112H112.48a.479.479,0,0,0-.48.48v11.04a.479.479,0,0,0,.48.48h11.04a.479.479,0,0,0,.48-.48V112.48A.479.479,0,0,0,123.52,112Zm-7.961,10.225h-1.781V116.5h1.781Zm-.889-6.51a1.032,1.032,0,1,1,1.032-1.032A1.032,1.032,0,0,1,114.67,115.715Zm7.555,6.51h-1.779V119.44c0-.665-.012-1.518-.926-1.518s-1.068.723-1.068,1.47v2.833h-1.778V116.5h1.707v.783h.024a1.87,1.87,0,0,1,1.685-.925c1.8,0,2.134,1.186,2.134,2.728Z"
      transform="translate(-108 -108)"
      fill="#fff"
    />
  </svg>
);

const Snapchat = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1455"
      data-name="Rectangle 1455"
      width="20"
      height="20"
      rx="4"
      fill="#fffc00"
    />
    <path
      id="Path_54"
      data-name="Path 54"
      d="M11.985,8.948c-.051-.174-.3-.3-.3-.3l-.062-.033a4.847,4.847,0,0,1-1.1-.72,3.771,3.771,0,0,1-.638-.725,2.831,2.831,0,0,1-.353-.725.248.248,0,0,1,0-.179.27.27,0,0,1,.087-.1c.14-.1.368-.248.508-.336.12-.08.225-.146.286-.189a1.243,1.243,0,0,0,.408-.426.74.74,0,0,0,.036-.62.721.721,0,0,0-.71-.454,1.015,1.015,0,0,0-.23.026,3.244,3.244,0,0,0-.53.171.017.017,0,0,1-.023-.015,11.467,11.467,0,0,0-.008-1.376,3.361,3.361,0,0,0-.276-1.13,3.04,3.04,0,0,0-.492-.737A2.992,2.992,0,0,0,7.809.462,3.611,3.611,0,0,0,5.994,0,3.617,3.617,0,0,0,4.18.462,3.095,3.095,0,0,0,2.91,1.824a3.361,3.361,0,0,0-.276,1.13,10.835,10.835,0,0,0-.008,1.375.016.016,0,0,1-.023.015,3.9,3.9,0,0,0-.529-.17,1,1,0,0,0-.23-.026.721.721,0,0,0-.71.454.731.731,0,0,0,.036.62,1.252,1.252,0,0,0,.408.426c.062.044.164.11.286.189s.357.233.5.332a.326.326,0,0,1,.1.105.255.255,0,0,1,0,.186,2.732,2.732,0,0,1-.35.717,3.743,3.743,0,0,1-.638.725,4.851,4.851,0,0,1-1.092.719c-.02.01-.044.02-.069.035,0,0-.25.128-.3.291a.574.574,0,0,0,.3.593,3.281,3.281,0,0,0,.9.365c.061.015.115.03.165.046a.343.343,0,0,1,.143.084.436.436,0,0,1,.064.2.581.581,0,0,0,.235.4,1.264,1.264,0,0,0,.674.14,3.641,3.641,0,0,1,1.074.164,2.793,2.793,0,0,1,.572.3A3.211,3.211,0,0,0,6,11.813a3.244,3.244,0,0,0,1.858-.587,2.908,2.908,0,0,1,.564-.293,3.74,3.74,0,0,1,1.074-.164,1.219,1.219,0,0,0,.674-.14.6.6,0,0,0,.24-.424.372.372,0,0,1,.059-.171.337.337,0,0,1,.137-.081l.171-.049a3.141,3.141,0,0,0,.824-.317c.4-.225.431-.5.388-.641Z"
      transform="translate(4 4.494)"
      fill="#fff"
      stroke="#000"
      strokeWidth="1"
    />
  </svg>
);

const Reddit = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1456"
      data-name="Rectangle 1456"
      width="20"
      height="20"
      rx="4"
      fill="#ff4500"
    />
    <path
      id="Path_57"
      data-name="Path 57"
      d="M7.785,8.642A.824.824,0,0,1,6.96,7.83a.834.834,0,0,1,.825-.824A.823.823,0,0,1,8.6,7.83a.812.812,0,0,1-.812.812m.191,1.576a2.672,2.672,0,0,1-1.97.62H5.993a2.669,2.669,0,0,1-1.969-.62.328.328,0,0,1,.464-.464,2.082,2.082,0,0,0,1.505.428h.013a2.085,2.085,0,0,0,1.506-.428.328.328,0,0,1,.464.464M3.4,7.83a.834.834,0,0,1,.824-.824.823.823,0,0,1,.812.824.812.812,0,0,1-.812.812A.823.823,0,0,1,3.4,7.83M10,2.655a.551.551,0,1,1-.551.551A.551.551,0,0,1,10,2.655m2,4.282A1.441,1.441,0,0,0,9.649,5.819a6.787,6.787,0,0,0-3.192-.956L7.082,2.89l1.715.4a1.206,1.206,0,1,0,.132-.642L6.936,2.182a.327.327,0,0,0-.387.22L5.773,4.851A6.913,6.913,0,0,0,2.329,5.8a1.441,1.441,0,1,0-1.7,2.322A2.532,2.532,0,0,0,.6,8.47a3.166,3.166,0,0,0,1.627,2.6,6.923,6.923,0,0,0,3.748,1.018,6.923,6.923,0,0,0,3.748-1.018,3.166,3.166,0,0,0,1.627-2.6,2.537,2.537,0,0,0-.02-.316A1.442,1.442,0,0,0,12,6.938"
      transform="translate(4 3)"
      fill="#fff"
      fillRule="evenodd"
    />
  </svg>
);

const Tiktok = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1459"
      data-name="Rectangle 1459"
      width="20"
      height="20"
      rx="4"
      fill="#010101"
    />
    <path
      id="Path_48"
      data-name="Path 48"
      d="M10.236,4.7a4.765,4.765,0,0,1-2.771-.879v4a3.643,3.643,0,0,1-2.383,3.409,3.686,3.686,0,0,1-4.052-1.02A3.621,3.621,0,0,1,.57,6.092,3.676,3.676,0,0,1,4.3,4.219V6.233a1.691,1.691,0,0,0-1.875.622,1.662,1.662,0,0,0,.012,1.962,1.691,1.691,0,0,0,1.882.6,1.673,1.673,0,0,0,1.16-1.589V0H7.465a2.7,2.7,0,0,0,.042.5h0a2.737,2.737,0,0,0,1.217,1.8,2.755,2.755,0,0,0,1.512.451Z"
      transform="translate(4.872 4)"
      fill="#fff"
    />
  </svg>
);

const Stackoverflow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1460"
      data-name="Rectangle 1460"
      width="20"
      height="20"
      rx="4"
      fill="#fdfdfd"
    />
    <g
      id="Group_277"
      data-name="Group 277"
      transform="translate(-9218.107 -13549.885)"
    >
      <path
        id="Path_55"
        data-name="Path 55"
        d="M9.445,13.459V10.29H10.5v4.225H1V10.29H2.057v3.169H9.445Z"
        transform="translate(9222.107 13551.209)"
        fill="#bcbaba"
      />
      <path
        id="Path_56"
        data-name="Path 56"
        d="M3.857,9.727H9.138V8.67H3.857ZM8.591,0,7.743.63l3.152,4.238.848-.63ZM5.971,2.5l4.058,3.379.676-.812L6.647,1.687,5.97,2.5ZM4.645,4.847l4.788,2.23.446-.958L5.091,3.889ZM3.961,7.321,9.129,8.408l.218-1.034L4.178,6.288Z"
        transform="translate(9221.364 13553.885)"
        fill="#ff7800"
      />
    </g>
  </svg>
);

const Steam = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1461"
      data-name="Rectangle 1461"
      width="20"
      height="20"
      rx="4"
      fill="#00587b"
    />
    <path
      id="Path_58"
      data-name="Path 58"
      d="M12,14A6.011,6.011,0,0,1,.208,15.635l2.3.951a1.7,1.7,0,0,0,3.365-.414l2.044-1.456A2.262,2.262,0,1,0,5.7,12.454v.029L4.273,14.556a1.694,1.694,0,0,0-1.052.293L0,13.519A6.01,6.01,0,0,1,12,14ZM3.767,17.1l-.738-.3a1.276,1.276,0,0,0,2.327-.063,1.274,1.274,0,0,0-1.628-1.681l.762.315A.94.94,0,0,1,3.767,17.1Zm4.2-3.143a1.507,1.507,0,1,1,1.51-1.507A1.511,1.511,0,0,1,7.972,13.961Zm0-.377A1.132,1.132,0,1,0,6.84,12.452,1.134,1.134,0,0,0,7.974,13.584Z"
      transform="translate(4 -4)"
      fill="#fff"
    />
  </svg>
);

const Web = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <rect
      id="Rectangle_1442"
      data-name="Rectangle 1442"
      width="20"
      height="20"
      rx="4"
      fill="#4984fe"
    />
    <path
      className="st0"
      d="M10,4.5C7,4.5,4.5,7,4.5,10S7,15.5,10,15.5s5.5-2.5,5.5-5.5S13,4.5,10,4.5z M13,9.8c0-0.7-0.2-1.3-0.4-1.9  c0.4-0.2,0.9-0.4,1.2-0.7c0.5,0.7,0.9,1.6,0.9,2.6H13z M14.8,10.2c0,1-0.4,1.8-0.9,2.6c-0.4-0.3-0.8-0.5-1.2-0.6  c0.2-0.5,0.3-1,0.3-1.6c0-0.1,0-0.2,0-0.4H14.8z M13.6,6.8c-0.4,0.2-0.7,0.4-1.1,0.6c-0.3-0.6-0.6-1.3-1.1-1.8  c-0.1-0.1-0.2-0.2-0.3-0.3C12.1,5.5,12.9,6.1,13.6,6.8z M10.4,14.8c-0.1,0-0.1,0-0.2,0v-2.6c0.6,0,1.2,0.1,1.8,0.3  C11.7,13.3,11.1,14.1,10.4,14.8z M9,14.1c-0.4-0.5-0.8-1.1-1-1.7c0.6-0.2,1.2-0.3,1.8-0.3v2.6c0,0-0.1,0-0.1,0  C9.4,14.6,9.2,14.4,9,14.1z M9.7,5.2C9.7,5.2,9.7,5.2,9.7,5.2l0.1,2.6C9.2,7.8,8.6,7.7,8,7.6C8.4,6.7,9,5.9,9.7,5.2z M11,5.9  c0.4,0.5,0.7,1.1,1,1.7c-0.6,0.2-1.2,0.3-1.8,0.3V5.2c0,0,0,0,0.1,0C10.6,5.4,10.8,5.7,11,5.9z M9.8,8.3v1.4H7.5v0  c0-0.6,0.1-1.2,0.3-1.8C8.5,8.2,9.1,8.3,9.8,8.3z M9.8,10.2v1.4c-0.7,0-1.4,0.1-2,0.3c-0.2-0.6-0.3-1.1-0.3-1.7L9.8,10.2z   M10.2,11.7v-1.4h2.3c0,0.6-0.1,1.2-0.3,1.8C11.6,11.8,10.9,11.7,10.2,11.7z M10.2,9.8V8.3c0.7,0,1.3-0.1,1.9-0.3  c0.2,0.6,0.3,1.2,0.3,1.8H10.2z M8.9,5.3c-0.6,0.6-1,1.3-1.3,2C7.2,7.2,6.8,7,6.4,6.8c0.1-0.1,0.1-0.1,0.1-0.2C7.2,6,8,5.5,8.9,5.3z   M7,10.2c0,0.7,0.1,1.3,0.4,2c-0.4,0.2-0.8,0.4-1.2,0.6c-0.6-0.8-0.9-1.7-0.9-2.6H7z M5.2,9.8c0-0.9,0.4-1.8,0.9-2.6  c0.4,0.3,0.8,0.5,1.2,0.7C7.2,8.4,7,8.9,7,9.5c0,0.1,0,0.2,0,0.3H5.2z M6.4,13.2c0.3-0.2,0.7-0.4,1.1-0.6c0.3,0.7,0.7,1.3,1.1,1.8  c0.1,0.1,0.1,0.1,0.2,0.2C8,14.4,7.2,14,6.6,13.4C6.5,13.3,6.5,13.3,6.4,13.2z M11.2,14.6c0.5-0.6,1-1.3,1.3-2  c0.4,0.2,0.7,0.4,1.1,0.6C13,13.9,12.2,14.4,11.2,14.6z"
      fill="#fff"
    />
  </svg>
);
