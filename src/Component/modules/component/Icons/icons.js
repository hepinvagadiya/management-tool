import React from "react";
import { StopOutlined } from '@ant-design/icons';


const Icons = (icon) => {
    const { type, } = icon;
    const getIcon = () => {
        switch (type) {
            case "usersMenu":
                return (
                    <svg width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 8.5C10.525 8.5 12.5714 6.59746 12.5714 4.25C12.5714 1.90254 10.525 0 8 0C5.475 0 3.42857 1.90254 3.42857 4.25C3.42857 6.59746 5.475 8.5 8 8.5ZM11.2 9.5625H10.6036C9.81071 9.90117 8.92857 10.0938 8 10.0938C7.07143 10.0938 6.19286 9.90117 5.39643 9.5625H4.8C2.15 9.5625 0 11.5613 0 14.025V15.4062C0 16.2861 0.767857 17 1.71429 17H14.2857C15.2321 17 16 16.2861 16 15.4062V14.025C16 11.5613 13.85 9.5625 11.2 9.5625Z" fill="#57A1D8" />
                    </svg>
                );
            case "groupsMenu":
                return (
                    <svg width="20" height="15" viewBox="0 0 20 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6.42857C4.10313 6.42857 5 5.46763 5 4.28571C5 3.10379 4.10313 2.14286 3 2.14286C1.89688 2.14286 1 3.10379 1 4.28571C1 5.46763 1.89688 6.42857 3 6.42857ZM17 6.42857C18.1031 6.42857 19 5.46763 19 4.28571C19 3.10379 18.1031 2.14286 17 2.14286C15.8969 2.14286 15 3.10379 15 4.28571C15 5.46763 15.8969 6.42857 17 6.42857ZM18 7.5H16C15.45 7.5 14.9531 7.73772 14.5906 8.12277C15.85 8.86272 16.7437 10.1987 16.9375 11.7857H19C19.5531 11.7857 20 11.3069 20 10.7143V9.64286C20 8.46094 19.1031 7.5 18 7.5ZM10 7.5C11.9344 7.5 13.5 5.82254 13.5 3.75C13.5 1.67746 11.9344 0 10 0C8.06563 0 6.5 1.67746 6.5 3.75C6.5 5.82254 8.06563 7.5 10 7.5ZM12.4 8.57143H12.1406C11.4906 8.90625 10.7688 9.10714 10 9.10714C9.23125 9.10714 8.5125 8.90625 7.85938 8.57143H7.6C5.6125 8.57143 4 10.2991 4 12.4286V13.3929C4 14.2801 4.67188 15 5.5 15H14.5C15.3281 15 16 14.2801 16 13.3929V12.4286C16 10.2991 14.3875 8.57143 12.4 8.57143ZM5.40938 8.12277C5.04688 7.73772 4.55 7.5 4 7.5H2C0.896875 7.5 0 8.46094 0 9.64286V10.7143C0 11.3069 0.446875 11.7857 1 11.7857H3.05938C3.25625 10.1987 4.15 8.86272 5.40938 8.12277Z" fill="#57A1D8" />
                    </svg>

                );
            case "blogMenu":
                return (
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.0548 7.97456C5.54145 7.87261 5.06325 8.28746 5.06325 8.81131V10.5832C5.06325 10.9419 5.3129 11.2301 5.65045 11.3567C6.29038 11.5958 6.751 12.2146 6.751 12.9388C6.751 13.8705 5.99503 14.6264 5.06325 14.6264C4.13147 14.6264 3.3755 13.8705 3.3755 12.9388V4.21975C3.3755 3.75215 2.99927 3.37597 2.53162 3.37597H0.843875C0.376228 3.37597 0 3.75215 0 4.21975V12.9388C0 16.0854 2.88676 18.571 6.15325 17.8854C8.06604 17.4847 9.60963 15.9377 10.0105 14.0287C10.6223 11.1141 8.70949 8.50192 6.0548 7.97456ZM7.34874 0.000852088C7.02526 -0.0167266 6.751 0.239923 6.751 0.563371V1.67435C6.751 1.97319 6.98306 2.21929 7.27842 2.23335C11.8283 2.47945 15.4851 6.17098 15.7488 10.7239C15.7664 11.0192 16.0125 11.2512 16.3079 11.2512H17.4366C17.76 11.2512 18.0167 10.977 17.9991 10.6536C17.7003 4.91586 13.0871 0.303206 7.34874 0.000852088ZM7.35929 3.37597C7.03229 3.35136 6.751 3.61152 6.751 3.942V5.07056C6.751 5.36588 6.97955 5.60847 7.27139 5.62956C9.97179 5.85105 12.1237 8.0273 12.3663 10.7344C12.3944 11.0262 12.6335 11.2512 12.9254 11.2512H14.0575C14.3846 11.2512 14.6483 10.97 14.6236 10.643C14.3283 6.77218 11.2306 3.67481 7.35929 3.37597Z" fill="#8FA8BA" />
                    </svg>
                );
            case "chatroomMenu":
                return (
                    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.2003 3.7224C12.7962 1.9152 9.60091 1.50385 6.94655 2.04888C3.97687 -1.20997 0.649061 0.288977 0 0.719887C0 0.719887 2.28374 2.92777 1.91281 4.86154C-0.790936 7.99737 0.494374 11.4887 1.91281 13.1374C2.28374 15.0711 0 17.279 0 17.279C0.642811 17.7113 3.96155 19.2057 6.94655 15.9635C9.59498 16.505 12.7903 16.0972 15.2003 14.2868C18.9271 11.5798 18.9393 6.44332 15.2003 3.72204V3.7224ZM9.1931 14.2694C8.26369 14.2724 7.33796 14.1365 6.43967 13.8651L5.82186 14.5439C5.47869 14.9225 5.09444 15.2498 4.67843 15.5177C4.17369 15.8068 3.62538 15.9845 3.06249 16.0414C3.09374 15.9781 3.12124 15.9148 3.14906 15.8551C3.76718 14.5515 3.93385 13.3819 3.64905 12.3463C2.63249 11.4358 2.02406 10.2721 2.02406 8.99963C2.02406 6.08423 5.23467 3.7224 9.1931 3.7224C13.1515 3.7224 16.3622 6.08423 16.3622 8.99963C16.3622 11.915 13.1515 14.2694 9.1931 14.2694ZM5.75374 10.2547C5.46992 10.2592 5.19609 10.1356 4.99225 9.9109C4.78841 9.68618 4.67117 9.37868 4.66624 9.0558C4.64436 7.44202 6.78592 7.40682 6.80748 9.01705V9.03518C6.8088 9.19405 6.78258 9.35165 6.73033 9.49898C6.67807 9.64631 6.6008 9.78047 6.50293 9.8938C6.40506 10.0071 6.28852 10.0974 6.15997 10.1594C6.03141 10.2215 5.89337 10.2541 5.75374 10.2554V10.2547ZM8.05904 9.0558C8.03436 7.44202 10.1759 7.40327 10.2006 9.01349V9.03518C10.2128 10.6379 8.08373 10.6554 8.05904 9.0558ZM12.5397 10.2547C12.2558 10.2592 11.982 10.1356 11.7781 9.91092C11.5742 9.68621 11.4569 9.37872 11.4518 9.0558C11.4303 7.44202 13.5718 7.40682 13.5934 9.01705V9.03518C13.5952 9.19419 13.5693 9.35202 13.5172 9.49958C13.4651 9.64714 13.3878 9.78151 13.2899 9.89494C13.1919 10.0084 13.0752 10.0986 12.9464 10.1605C12.8177 10.2223 12.6794 10.2546 12.5397 10.2554V10.2547Z" fill="#8FA8BA" />
                    </svg>

                );
            case "taskmanagementMenu":
                return (
                    <svg width="16" height="15" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.3628 0.122542C4.32796 0.0837007 4.28656 0.0528819 4.24098 0.0318533C4.1954 0.0108247 4.14653 0 4.09718 0C4.04782 0 3.99895 0.0108247 3.95337 0.0318533C3.90779 0.0528819 3.86639 0.0837007 3.83155 0.122542L1.84155 2.32066L1.13217 1.55265C1.09733 1.51381 1.05594 1.48299 1.01035 1.46196C0.964772 1.44094 0.915902 1.43011 0.866547 1.43011C0.817191 1.43011 0.768321 1.44094 0.72274 1.46196C0.677158 1.48299 0.63576 1.51381 0.600921 1.55265L0.110296 2.09845C0.0753358 2.13716 0.0475969 2.18315 0.0286699 2.23379C0.00974287 2.28444 0 2.33873 0 2.39357C0 2.4484 0.00974287 2.5027 0.0286699 2.55334C0.0475969 2.60399 0.0753358 2.64998 0.110296 2.68869L1.59748 4.33441C1.67172 4.41281 1.77022 4.45652 1.87264 4.45652C1.97506 4.45652 2.07357 4.41281 2.1478 4.33441L2.63499 3.79208L4.89124 1.28566C4.96154 1.20749 5.00126 1.10168 5.00179 0.991181C5.00231 0.880682 4.9636 0.774409 4.89405 0.69542L4.3628 0.122542ZM4.3628 5.6496C4.32796 5.61075 4.28656 5.57994 4.24098 5.55891C4.1954 5.53788 4.14653 5.52705 4.09718 5.52705C4.04782 5.52705 3.99895 5.53788 3.95337 5.55891C3.90779 5.57994 3.86639 5.61075 3.83155 5.6496L1.84155 7.86195L1.13217 7.09464C1.09733 7.05579 1.05594 7.02498 1.01035 7.00395C0.964772 6.98292 0.915902 6.97209 0.866547 6.97209C0.817191 6.97209 0.768321 6.98292 0.72274 7.00395C0.677158 7.02498 0.63576 7.05579 0.600921 7.09464L0.110296 7.63939C0.0753358 7.6781 0.0475969 7.72409 0.0286699 7.77473C0.00974287 7.82538 0 7.87967 0 7.93451C0 7.98935 0.00974287 8.04364 0.0286699 8.09429C0.0475969 8.14493 0.0753358 8.19092 0.110296 8.22963L1.59373 9.87882C1.66792 9.9572 1.76637 10.0009 1.86874 10.0009C1.9711 10.0009 2.06956 9.9572 2.14374 9.87882L2.63436 9.33407L4.89061 6.8266C4.96064 6.74898 5.00023 6.64376 5.00076 6.53386C5.00129 6.42396 4.96271 6.31828 4.89343 6.23983L4.3628 5.6496ZM1.99999 11.6669C1.17217 11.6669 0.481546 12.4134 0.481546 13.3334C0.481546 14.2535 1.1728 15 1.99999 15C2.39781 15 2.77934 14.8244 3.06065 14.5119C3.34195 14.1993 3.49999 13.7754 3.49999 13.3334C3.49999 12.8914 3.34195 12.4676 3.06065 12.155C2.77934 11.8425 2.39781 11.6669 1.99999 11.6669ZM15.5 12.2224H6.49999C6.36738 12.2224 6.2402 12.2809 6.14644 12.3851C6.05267 12.4893 5.99999 12.6306 5.99999 12.7779V13.889C5.99999 14.0363 6.05267 14.1776 6.14644 14.2818C6.2402 14.386 6.36738 14.4445 6.49999 14.4445H15.5C15.6326 14.4445 15.7598 14.386 15.8536 14.2818C15.9473 14.1776 16 14.0363 16 13.889V12.7779C16 12.6306 15.9473 12.4893 15.8536 12.3851C15.7598 12.2809 15.6326 12.2224 15.5 12.2224ZM15.5 1.11206H6.49999C6.36738 1.11206 6.2402 1.17059 6.14644 1.27477C6.05267 1.37895 5.99999 1.52024 5.99999 1.66758V2.77861C5.99999 2.92594 6.05267 3.06724 6.14644 3.17142C6.2402 3.2756 6.36738 3.33413 6.49999 3.33413H15.5C15.6326 3.33413 15.7598 3.2756 15.8536 3.17142C15.9473 3.06724 16 2.92594 16 2.77861V1.66758C16 1.52024 15.9473 1.37895 15.8536 1.27477C15.7598 1.17059 15.6326 1.11206 15.5 1.11206ZM15.5 6.66723H6.49999C6.36738 6.66723 6.2402 6.72576 6.14644 6.82994C6.05267 6.93412 5.99999 7.07542 5.99999 7.22275V8.33379C5.99999 8.48112 6.05267 8.62242 6.14644 8.7266C6.2402 8.83078 6.36738 8.88931 6.49999 8.88931H15.5C15.6326 8.88931 15.7598 8.83078 15.8536 8.7266C15.9473 8.62242 16 8.48112 16 8.33379V7.22275C16 7.07542 15.9473 6.93412 15.8536 6.82994C15.7598 6.72576 15.6326 6.66723 15.5 6.66723Z" fill="#8FA8BA" />
                    </svg>

                );
            case "author":
                return (
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 0C2.90927 0 0 2.68548 0 6C0 9.31452 2.90927 12 6.5 12C10.0907 12 13 9.31452 13 6C13 2.68548 10.0907 0 6.5 0ZM6.5 2.32258C7.77379 2.32258 8.80645 3.27581 8.80645 4.45161C8.80645 5.62742 7.77379 6.58065 6.5 6.58065C5.22621 6.58065 4.19355 5.62742 4.19355 4.45161C4.19355 3.27581 5.22621 2.32258 6.5 2.32258ZM6.5 10.6452C4.96149 10.6452 3.58286 10.0016 2.66028 8.99516C3.15302 8.13871 4.11754 7.54839 5.24194 7.54839C5.30484 7.54839 5.36774 7.55806 5.42802 7.575C5.76875 7.67661 6.1252 7.74194 6.5 7.74194C6.8748 7.74194 7.23387 7.67661 7.57198 7.575C7.63226 7.55806 7.69516 7.54839 7.75806 7.54839C8.88246 7.54839 9.84698 8.13871 10.3397 8.99516C9.41714 10.0016 8.03851 10.6452 6.5 10.6452Z" fill="#88CDFF" />
                    </svg>
                );
            case "post_delete":
                return (
                    <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.64286 0.687504H6.96429L6.75446 0.285746C6.71002 0.199854 6.64155 0.127604 6.55677 0.0771237C6.47198 0.0266431 6.37425 -6.50539e-05 6.27455 3.76679e-06H3.72321C3.62375 -0.000364272 3.52618 0.0262443 3.4417 0.0767811C3.35721 0.127318 3.28923 0.199738 3.24554 0.285746L3.03571 0.687504H0.357143C0.262423 0.687504 0.171582 0.72372 0.104605 0.788186C0.0376275 0.852651 0 0.940085 0 1.03125L0 1.71875C0 1.80992 0.0376275 1.89736 0.104605 1.96182C0.171582 2.02629 0.262423 2.0625 0.357143 2.0625H9.64286C9.73758 2.0625 9.82842 2.02629 9.8954 1.96182C9.96237 1.89736 10 1.80992 10 1.71875V1.03125C10 0.940085 9.96237 0.852651 9.8954 0.788186C9.82842 0.72372 9.73758 0.687504 9.64286 0.687504ZM1.1875 10.0332C1.20453 10.295 1.32459 10.5407 1.52323 10.7204C1.72186 10.9 1.98415 11 2.2567 11H7.7433C8.01585 11 8.27814 10.9 8.47677 10.7204C8.67541 10.5407 8.79547 10.295 8.8125 10.0332L9.28571 2.75H0.714286L1.1875 10.0332Z" fill="#88CDFF" />
                    </svg>
                );
            case "post_edit":
                return (
                    <svg width="11" style={{ marginRight: "9px" }} height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.6971 3.05144L9.70658 4.04191C9.6056 4.14289 9.44231 4.14289 9.34133 4.04191L6.95645 1.65705C6.85547 1.55607 6.85547 1.39278 6.95645 1.2918L7.94693 0.30133C8.34871 -0.100443 9.00186 -0.100443 9.40579 0.30133L10.6971 1.59259C11.101 1.99437 11.101 2.64752 10.6971 3.05144ZM6.10563 2.14261L0.463575 7.78464L0.00808505 10.3951C-0.0542225 10.7474 0.253018 11.0525 0.605378 10.9924L3.21585 10.5347L8.85791 4.89272C8.95889 4.79174 8.95889 4.62846 8.85791 4.52748L6.47303 2.14261C6.3699 2.04163 6.20661 2.04163 6.10563 2.14261ZM2.66583 7.30122C2.54766 7.18305 2.54766 6.99398 2.66583 6.87581L5.97457 3.56709C6.09274 3.44892 6.28181 3.44892 6.39998 3.56709C6.51815 3.68525 6.51815 3.87432 6.39998 3.99249L3.09124 7.30122C2.97307 7.41939 2.78399 7.41939 2.66583 7.30122ZM1.8902 9.10813H2.9215V9.88804L1.53569 10.1308L0.8675 9.46263L1.11028 8.07683H1.8902V9.10813Z" fill="#88CDFF" />
                    </svg>
                );
            case "del_postname":
                return (
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.16667 4.25V0H0.875C0.390104 0 0 0.334375 0 0.75V15.25C0 15.6656 0.390104 16 0.875 16H13.125C13.6099 16 14 15.6656 14 15.25V5H9.04167C8.56042 5 8.16667 4.6625 8.16667 4.25ZM10.5 11.625C10.5 11.8312 10.3031 12 10.0625 12H3.9375C3.69687 12 3.5 11.8312 3.5 11.625V11.375C3.5 11.1688 3.69687 11 3.9375 11H10.0625C10.3031 11 10.5 11.1688 10.5 11.375V11.625ZM10.5 9.625C10.5 9.83125 10.3031 10 10.0625 10H3.9375C3.69687 10 3.5 9.83125 3.5 9.625V9.375C3.5 9.16875 3.69687 9 3.9375 9H10.0625C10.3031 9 10.5 9.16875 10.5 9.375V9.625ZM10.5 7.375V7.625C10.5 7.83125 10.3031 8 10.0625 8H3.9375C3.69687 8 3.5 7.83125 3.5 7.625V7.375C3.5 7.16875 3.69687 7 3.9375 7H10.0625C10.3031 7 10.5 7.16875 10.5 7.375ZM14 3.80938V4H9.33333V0H9.55573C9.78906 0 10.0115 0.078125 10.1755 0.21875L13.7448 3.28125C13.9089 3.42188 14 3.6125 14 3.80938Z" fill="#8FA8BA" />
                    </svg>
                );
            case "close":
                return (
                    <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="#758793" aria-hidden="true">
                        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                    </svg>
                );
            default:
                return <span><StopOutlined /></span>;
        }
    };
    return (
        <span>
            {getIcon()}
        </span>
    );
};

export default Icons;