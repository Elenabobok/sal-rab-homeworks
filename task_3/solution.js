function renderCartItem(item) {
   // const product = item;

    // Задание №3.1. Формирование строки корзины

    product = [
        {id: 1, title: "Пицца", count: 1, price: 500},
        {id: 2, title: "Чебурек", count: 2, price: 120}];
    let itemCountText = '';
    itemCountText = itemCountText + product.count;
    itemCountText = itemCountText + "×";
    itemCountText = itemCountText + product.price;
    itemCountText = itemCountText + "₽ = ";
    let sum = product.count × product.price;  
    itemCountText = itemCountText + sum;
    itemCountText = itemCountText  + "₽";

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
