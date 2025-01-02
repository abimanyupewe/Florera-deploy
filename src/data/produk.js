// data produk
document.addEventListener("alpine:init", () => {
  Alpine.data("produk", () => ({
    items: [
      {
        id: 1,
        name: "Nutrigrow Spray",
        img: "Produk-250-ml.jpeg",
        description: "Pupuk Organik Cair Nutrigrow 250 ml.",
        price: 15000,
      },
      {
        id: 2,
        name: "Nutrigrow Pure",
        img: "Produk-100-ml.jpeg",
        description: "Pupuk Organik Cair Nutrigrow 100 ml.",
        price: 25000,
      },
    ],
  }));

  // add cart
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0, // jumlah harga

    // untuk memasukkan data ke dalam keranjang
    add(newItem) {
      // cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika cart masih kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.item = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }

      // this.items.push(newItem); // memasukkan data produk
      // this.quantity++; // untuk total produk
      // this.total += newItem.price; // menjumlahkan harga setiap produk yang dipilih
    },

    // remove btn
    remove(id) {
      // ambil item yang mau diremove berdasarkan id
      const cartItem = this.items.find((item) => item.id === id);

      // jika item lebih dari 1
      if (cartItem.quantity > 1) {
        // telusuri satu persatu
        this.items = this.items.map((item) => {
          // jika bukan barang yang dipilih
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika barang sisa 1
        this.items = this.items.filter((item) => item.id != id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// konversi ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
