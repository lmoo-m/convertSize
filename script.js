const input = document.getElementById("input");
const output = document.getElementById("output");
const switchBtn = document.getElementById("switch");

let set = false;
output.innerHTML = "0 GB";
switchBtn.innerHTML = "MB";

switchBtn.addEventListener("click", () => {
    set = !set;
    output.innerHTML = `0${set ? " MB" : " GB"}`;
    switchBtn.innerHTML = `${set ? "GB" : "MB"}`;
});

const convertGbToMb = (size) => {
    return size * 1024;
};

const convertMbToGb = (size) => {
    return size / 1024;
};

input.addEventListener("keyup", () => {
    const size = set ? convertGbToMb(input.value) : convertMbToGb(input.value);
    output.innerHTML = set ? format(size) : size + `${set ? " MB" : " GB"}`;
});

const format = (number) => {
    const getNumberToIDR = Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
    }).format(number);

    const splitNumber = getNumberToIDR.split(",")[0];
    return splitNumber.replace(/Rp./, "");
};
