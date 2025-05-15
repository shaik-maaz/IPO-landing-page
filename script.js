const ipoData = [
    {
      name: "Reliance Retail",
      date: "2025-06-15",
      status: "Upcoming",
      priceBand: "\u20B9900 - \u20B9950",
      lotSize: 15
    },
    {
      name: "Tata Technologies",
      date: "2025-05-10",
      status: "Closed",
      priceBand: "\u20B9500 - \u20B9550",
      lotSize: 10
    },
    {
      name: "Zomato Ltd",
      date: "2025-05-25",
      status: "Active",
      priceBand: "\u20B9600 - \u20B9650",
      lotSize: 20
    }
  ];
  
  function displayIPOs(data) {
    const container = document.getElementById("ipoContainer");
    container.innerHTML = "";
    data.forEach(ipo => {
      container.innerHTML += `
        <div class="ipo-card">
          <h3>${ipo.name}</h3>
          <p><strong>Date:</strong> ${ipo.date}</p>
          <p><strong>Status:</strong> ${ipo.status}</p>
          <p><strong>Price Band:</strong> ${ipo.priceBand}</p>
          <p><strong>Lot Size:</strong> ${ipo.lotSize}</p>
          <button>Apply Now</button>
        </div>
      `;
    });
  }
  
  function filterIPOs() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const status = document.getElementById("statusFilter").value;
  
    const filtered = ipoData.filter(ipo => {
      return (
        (ipo.name.toLowerCase().includes(search)) &&
        (status === "All" || ipo.status === status)
      );
    });
  
    displayIPOs(filtered);
  }
  
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Initial Load
  displayIPOs(ipoData);
  