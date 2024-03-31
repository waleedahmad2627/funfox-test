import React from "react";

const Cloud2 = ({ text }) => {
  return (
    <div className="relative">
      <svg
        width="181"
        height="109"
        viewBox="0 0 181 109"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M179.393 50.8843C178.591 48.373 177.48 45.9919 176.09 43.8061C175.375 42.6592 174.577 41.5774 173.702 40.571C173.004 39.6831 172.183 38.9198 171.269 38.3089C171.6 34.1614 171.007 29.9881 169.542 26.1431C168.078 22.2982 165.783 18.8951 162.854 16.2227C158.945 12.8841 154.329 10.6709 149.43 9.78672C144.531 8.90257 139.506 9.37597 134.819 11.1633C129.411 13.1166 124.56 16.5605 120.734 21.1605C118.251 17.701 115.379 14.5956 112.185 11.9174C106.837 7.49714 100.782 4.19797 94.3286 2.1878C81.0737 -1.91005 66.8745 -0.208244 54.7537 6.93097C52.2743 8.36074 49.8945 9.9867 47.6333 11.7958C38.9505 7.14988 27.924 8.46338 19.3751 12.866C10.1119 17.7308 2.00946 27.0225 0.357712 38.3575C-0.208535 41.6335 -0.101903 45.0055 0.669964 48.2313C1.44183 51.457 2.85977 54.4564 4.82189 57.014C5.03716 57.2628 5.31785 57.4327 5.62541 57.5005C4.49111 59.4315 3.63309 61.5394 3.08083 63.7517C2.03209 67.317 1.99062 71.1433 2.96176 74.7346C3.9329 78.3258 5.87184 81.5162 8.52713 83.892C9.92182 85.0452 11.494 85.9183 13.1699 86.4703C14.0467 86.8861 14.9926 87.1007 15.9488 87.1007C16.905 87.1007 17.851 86.8861 18.7278 86.4703C21.6657 91.8516 26.1319 96.044 31.4507 98.4134C34.5784 99.786 37.9281 100.457 41.2994 100.386C44.6706 100.315 47.994 99.5033 51.0707 97.9999C52.7131 101.313 55.4254 103.844 58.6821 105.102C62.5879 106.726 66.6971 107.693 70.8694 107.973C79.9158 108.842 89.0299 107.692 97.6544 104.592C102.635 102.76 107.405 100.312 111.873 97.2945C111.964 97.2409 112.042 97.1643 112.1 97.0712C112.158 96.9781 112.195 96.8712 112.208 96.7593C116.65 99.9433 121.787 101.79 127.096 102.111C135.099 102.51 142.933 99.5106 148.948 93.7432C150.445 92.3179 151.82 90.7465 153.055 89.0486C154.878 89.4866 156.767 89.4866 158.59 89.0486C160.771 88.6471 162.899 87.9611 164.93 87.0054C169.085 85.0158 172.732 81.9516 175.554 78.0785C178.237 74.2608 179.994 69.7688 180.665 65.0165C181.336 60.2641 180.899 55.4042 179.393 50.8843Z"
          fill="#AAAAAA"
        />
        <path
          d="M178.434 63.0464C178.103 67.5287 176.731 71.8456 174.447 75.5905C172.162 79.3353 169.041 82.3847 165.376 84.4514C163.32 85.6615 161.129 86.5771 158.858 87.1757C156.939 87.6379 154.974 87.7108 153.033 88.0514C153.624 87.1902 154.175 86.2972 154.684 85.3757C155.354 84.4522 155.765 83.3372 155.867 82.165C155.867 81.3866 154.952 81.1677 154.483 81.6055C153.304 83.1007 152.279 84.732 151.425 86.4703C150.372 88.0486 149.191 89.5219 147.899 90.873C145.306 93.5632 142.279 95.7074 138.97 97.1972C131.982 100.31 124.151 100.31 117.163 97.1972C113.177 95.415 109.495 92.9153 106.27 89.8027C105.913 89.4379 105.266 90.0946 105.556 90.5324C107.014 92.6648 108.769 94.536 110.757 96.0783H110.556C102.962 100.963 94.5435 104.131 85.802 105.394C81.5299 105.974 77.2147 106.08 72.9229 105.711C68.8859 105.453 64.8955 104.635 61.0482 103.278C59.1797 102.615 57.4175 101.638 55.8251 100.384C54.5647 99.3006 53.5171 97.9522 52.7448 96.4188L53.1019 96.1999C54.9514 95.0378 56.6737 93.6506 58.2357 92.0648C60.004 90.5278 61.3862 88.5279 62.2535 86.2514C62.633 84.8163 60.9589 84.8163 60.2893 85.4974C59.7069 86.1959 59.177 86.9442 58.7045 87.7352C58.1443 88.5283 57.5405 89.2838 56.8965 89.9973C55.6616 91.3755 54.2833 92.5919 52.7894 93.6216C49.8388 95.7128 46.5002 97.0667 43.0129 97.5864C39.5108 98.0627 35.9554 97.6929 32.5993 96.5032C29.2431 95.3135 26.1685 93.3331 23.5937 90.7027C20.6501 87.7702 18.4251 84.083 17.1207 79.9758C16.8528 79.1245 15.6029 79.7812 15.8261 80.5839C16.1267 81.6359 16.4844 82.6674 16.8975 83.6731C15.9401 83.6037 14.9865 83.482 14.0404 83.3082C12.7193 82.9099 11.4674 82.2771 10.3351 81.4353C7.98288 79.6453 6.20959 77.0914 5.26831 74.1381C4.36732 70.927 4.19929 67.5248 4.77888 64.2269C5.35848 60.929 6.66813 57.8351 8.5941 55.214C10.6685 52.2477 13.1713 49.6682 16.0046 47.5763C16.8082 46.9682 16.0047 45.9223 15.2457 46.4574C12.06 48.5798 9.23564 51.2873 6.89773 54.46C3.68477 50.3704 2.08076 45.0653 2.43355 39.6954C2.93096 34.2417 4.9131 29.0746 8.12538 24.8578C13.922 17.21 22.2247 12.324 31.2721 11.2363C36.1878 10.6668 41.1569 11.0289 45.9593 12.3066C42.3271 15.3686 39.0845 18.9431 36.3166 22.9362C36.1653 23.0929 36.0449 23.2816 35.9626 23.4907C35.8803 23.6997 35.8379 23.9249 35.8379 24.1524C35.8379 24.3799 35.8803 24.605 35.9626 24.8141C36.0449 25.0231 36.1653 25.2118 36.3166 25.3686C36.7029 25.6096 37.1553 25.6931 37.5929 25.6039C38.0305 25.5148 38.4247 25.2589 38.705 24.8821C46.6254 13.3548 58.2638 5.53127 71.2711 2.9905C84.2152 0.60345 97.5067 3.71094 108.413 11.6742C114.634 16.0055 119.956 21.7056 124.038 28.409C124.239 28.7253 124.752 28.409 124.573 27.9955C123.531 25.9869 122.36 24.0606 121.069 22.2308C124.163 18.3097 128.118 15.3057 132.564 13.4985C136.965 11.6306 141.696 10.8738 146.403 11.285C150.952 11.6162 155.325 13.3207 159.035 16.2077C162.745 19.0946 165.644 23.0499 167.407 27.6307C169.273 32.7414 169.345 38.4226 167.608 43.5872C167.095 44.998 168.97 45.5331 169.416 44.2683C169.884 43.0021 170.243 41.691 170.487 40.3521L171.38 41.3007C172.134 42.1493 172.834 43.0512 173.478 44.0007C174.689 45.7856 175.7 47.7207 176.492 49.7655C178.073 53.9691 178.738 58.5153 178.434 63.0464Z"
          fill="white"
        />
        <g style={{ mixBlendMode: "multiply" }}>
          <path
            d="M177.965 55.5789C177.381 59.6408 176.028 63.5258 173.992 66.9869C171.897 70.3605 169.126 73.1717 165.889 75.2084C160.421 78.8083 151.358 82.5055 146.202 76.7651C143.481 78.6127 140.526 80.0141 137.43 80.9245C129.204 83.2887 120.504 82.7696 112.565 79.4407C108.549 77.7061 104.788 75.3376 101.404 72.4111C99.1722 70.5382 95.9134 68.0085 95.2884 64.7491C94.105 66.0623 92.8369 67.2816 91.4938 68.3977C88.7288 70.7771 85.5684 72.5527 82.186 73.6273C79.6176 74.3127 76.9933 74.72 74.3514 74.8435C71.3539 75.096 68.3385 74.8167 65.4231 74.0165C64.2328 73.7704 63.1137 73.2183 62.1586 72.406C61.2036 71.5937 60.4403 70.5448 59.9321 69.3463C59.2156 69.8447 58.47 70.2916 57.7 70.6841C51.5841 73.7003 41.7629 74.284 36.9193 68.8841C34.0809 69.0431 31.2545 68.3801 28.7275 66.9625C24.2634 64.5301 19.0403 60.2978 17.9466 54.606C17.5216 51.2016 18.067 47.7371 19.509 44.6818C20.2563 42.6511 21.2715 40.75 22.5223 39.0386C20.3609 39.1724 18.1926 39.0007 16.0716 38.5278C11.853 37.5792 6.8531 35.1225 4.64333 30.8171C3.38752 33.5948 2.62993 36.6081 2.41125 39.6954C2.0646 45.0687 3.67674 50.3741 6.89773 54.46C9.29855 51.3136 12.1839 48.6467 15.4243 46.5791C16.2279 46.0439 16.9868 47.0899 16.1832 47.698C13.3499 49.7899 10.8471 52.3694 8.77268 55.3357C6.84671 57.9568 5.53705 61.0506 4.95746 64.3485C4.37787 67.6464 4.54589 71.0486 5.44689 74.2597C6.38817 77.2131 8.16145 79.767 10.5137 81.5569C11.646 82.3988 12.8979 83.0316 14.219 83.4299C15.1651 83.6036 16.1187 83.7254 17.076 83.7947C16.663 82.7891 16.3053 81.7575 16.0047 80.7056C15.7814 79.9029 17.0314 79.2461 17.2993 80.0975C18.6037 84.2046 20.8287 87.8918 23.7723 90.8243C26.347 93.4548 29.4217 95.4352 32.7778 96.6249C36.134 97.8145 39.6894 98.1844 43.1915 97.708C46.6788 97.1884 50.0174 95.8344 52.968 93.7432C54.4619 92.7135 55.8402 91.4972 57.0751 90.1189C57.7191 89.4054 58.3229 88.65 58.883 87.8568C59.3555 87.0659 59.8855 86.3175 60.4678 85.619C61.1375 84.9379 62.8115 84.9379 62.4321 86.3731C61.5648 88.6495 60.1826 90.6495 58.4143 92.1865C56.8337 93.7937 55.0886 95.1975 53.2136 96.3702L52.8564 96.5891C53.6287 98.1225 54.6763 99.4709 55.9367 100.554C57.5291 101.809 59.2913 102.785 61.1598 103.448C65.0072 104.806 68.9975 105.623 73.0345 105.881C77.3263 106.25 81.6414 106.144 85.9136 105.565C94.6551 104.301 103.074 101.133 110.668 96.2486H110.868C108.88 94.7063 107.126 92.8351 105.668 90.7027C105.377 90.2649 106.025 89.6081 106.382 89.973C109.578 92.9746 113.205 95.3825 117.118 97.0999C124.107 100.213 131.937 100.213 138.926 97.0999C142.234 95.6101 145.261 93.4659 147.854 90.7757C149.147 89.4247 150.327 87.9513 151.381 86.3731C152.234 84.6348 153.26 83.0035 154.439 81.5083C154.907 81.0704 155.823 81.2893 155.823 82.0677C155.721 83.2399 155.31 84.3549 154.64 85.2785C154.13 86.1999 153.579 87.0929 152.988 87.9541C154.93 87.6136 156.894 87.5406 158.814 87.0784C161.096 86.5147 163.302 85.6317 165.376 84.4515C169.041 82.3847 172.162 79.3353 174.447 75.5905C176.731 71.8457 178.103 67.5287 178.434 63.0464C178.575 60.5456 178.418 58.0354 177.965 55.5789Z"
            fill="#EDEDED"
          />
        </g>
      </svg>

      <h1
        className="absolute text-center font-[400] text-[26px] leading-[24.63px]"
        style={{ transform: "translate(-50%, -50%)", top: "50%", left: "50%" }}
      >
        {text}
      </h1>
    </div>
  );
};

export default Cloud2;
