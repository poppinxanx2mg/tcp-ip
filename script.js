const LAYERS_DATA = {
    app: {
        title: "Прикладной уровень (Application Layer)",
        text: "Это самый верхний уровень, с которым взаимодействует пользователь. Здесь данные генерируются (например, HTML-код веб-страницы или текст email). <br><br><strong>Функция:</strong> Интерфейс между человеком и сетью.<br><strong>Единица данных:</strong> Данные (Data).",
        protocols: ["HTTP", "HTTPS", "DNS", "FTP", "SMTP", "DHCP"]
    },
    transport: {
        title: "Транспортный уровень (Transport Layer)",
        text: "Этот уровень отвечает за надежность и порядок доставки. Данные разбиваются на сегменты. Добавляются порты отправителя и получателя. <br><br><strong>Инкапсуляция:</strong> Добавляется заголовок TCP или UDP.<br><strong>Единица данных:</strong> Сегмент (Segment) или Датаграмма.",
        protocols: ["TCP (Надежный)", "UDP (Быстрый)"]
    },
    internet: {
        title: "Межсетевой уровень (Internet Layer)",
        text: "Главная задача — маршрутизация. Определение наилучшего пути для пакета через сеть. Здесь добавляются IP-адреса (Кто отправил? Кому?).<br><br><strong>Инкапсуляция:</strong> Добавляется IP-заголовок.<br><strong>Единица данных:</strong> Пакет (Packet).",
        protocols: ["IPv4", "IPv6", "ICMP", "IPsec"]
    },
    access: {
        title: "Уровень сетевого доступа (Network Access)",
        text: "Физическая передача данных по проводам или радиоволнам. Пакет упаковывается в кадр, добавляются MAC-адреса устройств внутри одной сети.<br><br><strong>Инкапсуляция:</strong> Добавляется заголовок кадра и трейлер (контрольная сумма).<br><strong>Единица данных:</strong> Кадр (Frame).",
        protocols: ["Ethernet", "Wi-Fi", "ARP", "DSL"]
    }
};

function showInfo(layerId) {
    const info = LAYERS_DATA[layerId];
    const titleEl = document.getElementById('infoTitle');
    const contentEl = document.getElementById('infoContent');
    const badgesEl = document.getElementById('protocolBadges');

    titleEl.textContent = info.title;
    contentEl.innerHTML = info.text;

    badgesEl.innerHTML = '';
    info.protocols.forEach(proto => {
        const badge = document.createElement('span');
        badge.className = 'badge';
        badge.textContent = proto;
        badgesEl.appendChild(badge);
    });
}

function animatePacket() {
    const packet = document.getElementById('dataPacket');
    const sendBtn = document.getElementById('sendBtn');
    
    sendBtn.disabled = true;
    packet.classList.remove('hidden');
    
    // Сброс позиции и текста
    packet.style.top = '60px'; // Начало на уровне App
    packet.innerHTML = "DATA";
    packet.style.backgroundColor = "#fff";
    packet.style.color = "#333";

    setTimeout(() => {
        packet.innerHTML = "DATA";
    }, 0);

    setTimeout(() => {
        packet.style.top = '160px'; 
        packet.innerHTML = "<small>[TCP]</small> DATA";
        packet.style.backgroundColor = "#e0f7fa";
    }, 1000);

    setTimeout(() => {
        packet.style.top = '260px';
        packet.innerHTML = "<small>[IP]</small> <small>[TCP]</small> DATA";
        packet.style.backgroundColor = "#fff3e0";
    }, 2000);

    setTimeout(() => {
        packet.style.top = '360px';
        packet.innerHTML = "<small>[MAC]</small> <small>[IP]</small> ...";
        packet.style.backgroundColor = "#eceff1";
    }, 3000);

    setTimeout(() => {
        packet.style.top = '450px';
        packet.innerHTML = "101101001..."; // Биты
    }, 4000);

    setTimeout(() => {
        packet.classList.add('hidden');
        sendBtn.disabled = false;
        packet.style.top = '60px';
    }, 5000);

}
