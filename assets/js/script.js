'use strict';

const languageSelect = document.querySelector('#navbar-language');
const LANGUAGE_STORAGE_KEY = 'storefront-language';
const translations = {
  'en-US': {
    members_only: 'Members only',
    newsletter_title: 'Get first access to new drops and private offers.',
    newsletter_desc: 'Join <b>ValueMart</b> for curated launches, seasonal edits, and limited-time savings sent straight to your inbox.',
    newsletter_placeholder: 'Enter your email address',
    join_now: 'Join now',
    toast_message: 'Someone new just bought',
    language_label: 'Language',
    nav_home: 'Home',
    nav_categories: 'Categories',
    nav_mens: "Men's",
    nav_womens: "Women's",
    nav_jewelry: 'Jewelry',
    nav_perfume: 'Perfume',
    nav_blog: 'Blog',
    nav_offers: 'Hot Offers',
    menu_title: 'Menu',
    shop_now: 'Shop now',
    explore_collection: 'Explore collection',
    browse_collection: 'Browse collection',
    discover_deals: 'Discover deals',
    new_arrivals: 'New Arrivals',
    trending: 'Trending',
    top_rated: 'Top Rated',
    deal_of_day: 'Deal of the day',
    saved_picks: 'Saved picks',
    shopping_cart: 'Shopping Cart',
    my_wishlist: 'My Wishlist',
    items: 'Items',
    saved_products: 'Saved products',
    price: 'Price',
    subtotal: 'Subtotal',
    wishlist_value: 'Wishlist value',
    proceed_checkout: 'Proceed to checkout',
    review_saved: 'Review saved items',
    item_selected: 'item selected',
    items_selected: 'items selected',
    product_saved: 'saved product',
    products_saved: 'saved products',
    ready_to_ship: 'Ready to ship',
    saved_for_later: 'Saved for later',
    remove: 'Remove',
    move_to_wishlist: 'Move to wishlist',
    add_to_cart: 'Add to cart',
    empty_cart_title: 'Your cart is empty.',
    empty_cart_text: 'Add products from the storefront and they will appear here with quantity controls and subtotal.',
    empty_wishlist_title: 'Your wishlist is empty.',
    empty_wishlist_text: 'Tap the heart on any product to save it here for later.',
    saved_badge: 'Saved'
  },
  'es-ES': {
    members_only: 'Solo miembros',
    newsletter_title: 'Obtén acceso primero a nuevos lanzamientos y ofertas privadas.',
    newsletter_desc: 'Únete a <b>ValueMart</b> para recibir lanzamientos seleccionados, ediciones de temporada y ahorros por tiempo limitado en tu correo.',
    newsletter_placeholder: 'Ingresa tu correo electrónico',
    join_now: 'Unirme ahora',
    toast_message: 'Alguien acaba de comprar',
    language_label: 'Idioma',
    nav_home: 'Inicio',
    nav_categories: 'Categorías',
    nav_mens: 'Hombre',
    nav_womens: 'Mujer',
    nav_jewelry: 'Joyería',
    nav_perfume: 'Perfume',
    nav_blog: 'Blog',
    nav_offers: 'Ofertas',
    menu_title: 'Menú',
    shop_now: 'Comprar ahora',
    explore_collection: 'Explorar colección',
    browse_collection: 'Ver colección',
    discover_deals: 'Descubrir ofertas',
    new_arrivals: 'Novedades',
    trending: 'Tendencias',
    top_rated: 'Mejor valorados',
    deal_of_day: 'Oferta del día',
    saved_picks: 'Selecciones guardadas',
    shopping_cart: 'Carrito de compras',
    my_wishlist: 'Mi lista de deseos',
    items: 'Artículos',
    saved_products: 'Productos guardados',
    price: 'Precio',
    subtotal: 'Subtotal',
    wishlist_value: 'Valor de la lista',
    proceed_checkout: 'Proceder al pago',
    review_saved: 'Revisar guardados',
    item_selected: 'artículo seleccionado',
    items_selected: 'artículos seleccionados',
    product_saved: 'producto guardado',
    products_saved: 'productos guardados',
    ready_to_ship: 'Listo para enviar',
    saved_for_later: 'Guardado para después',
    remove: 'Eliminar',
    move_to_wishlist: 'Mover a favoritos',
    add_to_cart: 'Añadir al carrito',
    empty_cart_title: 'Tu carrito está vacío.',
    empty_cart_text: 'Añade productos de la tienda y aparecerán aquí con controles de cantidad y subtotal.',
    empty_wishlist_title: 'Tu lista de deseos está vacía.',
    empty_wishlist_text: 'Toca el corazón en cualquier producto para guardarlo aquí.',
    saved_badge: 'Guardado'
  },
  'fr': {
    members_only: 'Réservé aux membres',
    newsletter_title: 'Accédez en premier aux nouveautés et aux offres privées.',
    newsletter_desc: 'Rejoignez <b>ValueMart</b> pour recevoir des lancements sélectionnés, des éditions saisonnières et des offres limitées directement dans votre boîte mail.',
    newsletter_placeholder: 'Entrez votre adresse e-mail',
    join_now: 'Rejoindre',
    toast_message: 'Quelqu’un vient d’acheter',
    language_label: 'Langue',
    nav_home: 'Accueil',
    nav_categories: 'Catégories',
    nav_mens: 'Homme',
    nav_womens: 'Femme',
    nav_jewelry: 'Bijoux',
    nav_perfume: 'Parfum',
    nav_blog: 'Blog',
    nav_offers: 'Offres',
    menu_title: 'Menu',
    shop_now: 'Acheter',
    explore_collection: 'Explorer la collection',
    browse_collection: 'Parcourir la collection',
    discover_deals: 'Découvrir les offres',
    new_arrivals: 'Nouveautés',
    trending: 'Tendance',
    top_rated: 'Les mieux notés',
    deal_of_day: 'Offre du jour',
    saved_picks: 'Sélection sauvegardée',
    shopping_cart: 'Panier',
    my_wishlist: 'Ma liste d’envies',
    items: 'Articles',
    saved_products: 'Produits sauvegardés',
    price: 'Prix',
    subtotal: 'Sous-total',
    wishlist_value: 'Valeur de la liste',
    proceed_checkout: 'Passer au paiement',
    review_saved: 'Voir les favoris',
    item_selected: 'article sélectionné',
    items_selected: 'articles sélectionnés',
    product_saved: 'produit sauvegardé',
    products_saved: 'produits sauvegardés',
    ready_to_ship: 'Prêt à expédier',
    saved_for_later: 'Enregistré pour plus tard',
    remove: 'Supprimer',
    move_to_wishlist: 'Déplacer vers favoris',
    add_to_cart: 'Ajouter au panier',
    empty_cart_title: 'Votre panier est vide.',
    empty_cart_text: 'Ajoutez des produits depuis la boutique et ils apparaîtront ici avec quantité et sous-total.',
    empty_wishlist_title: 'Votre liste d’envies est vide.',
    empty_wishlist_text: 'Touchez le cœur sur un produit pour l’enregistrer ici.',
    saved_badge: 'Enregistré'
  }
};

let currentLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY) || 'en-US';

function t(key) {
  const dictionary = translations[currentLanguage] || translations['en-US'];
  return dictionary[key] || translations['en-US'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    element.setAttribute('placeholder', t(element.dataset.i18nPlaceholder));
  });

  if (languageSelect) {
    languageSelect.setAttribute('aria-label', t('language_label'));
    languageSelect.value = currentLanguage;
  }
}

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');
const scrollTopButton = document.querySelector('[data-scroll-top]');

mobileMenu.forEach((menu) => {
  if (menu.classList.contains('mobile-navigation-menu') && menu.parentElement !== document.body) {
    document.body.appendChild(menu);
  }
});

const updateMobileMenuPosition = function (menu) {
  if (!menu || window.innerWidth > 767) return;

  const header = document.querySelector('.storefront header');
  const headerBottom = header ? Math.round(header.getBoundingClientRect().bottom) : 0;
  const topOffset = Math.max(headerBottom, 0);

  menu.style.top = `${topOffset}px`;
  menu.style.height = `calc(100vh - ${topOffset}px)`;
};

const syncMobileMenuState = function () {
  const hasActiveMobileMenu = Array.from(mobileMenu).some((menu) => menu.classList.contains('active'));
  document.body.classList.toggle('mobile-menu-open', hasActiveMobileMenu);
};

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
    syncMobileMenuState();
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    updateMobileMenuPosition(mobileMenu[i]);
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
    syncMobileMenuState();
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}

window.addEventListener('resize', function () {
  mobileMenu.forEach((menu) => {
    if (menu.classList.contains('active')) {
      updateMobileMenuPosition(menu);
    }
  });
});

if (scrollTopButton) {
  scrollTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}



//scrollbar

const slider = document.querySelector('.has-scrollbar1');

if (slider) {
  let scrollAmount = 0;

  setInterval(() => {
    const firstSlide = slider.querySelector('.slider-item');
    if (!firstSlide) return;

    const cardWidth = firstSlide.offsetWidth;

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 2) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth"
      });
      scrollAmount = 0;
    } else {
      scrollAmount += cardWidth;

      slider.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  }, 3000);
}




// deal of the day auto slider
const featuredDealSlider = document.querySelector('.product-featured .showcase-wrapper');

if (featuredDealSlider) {
  let featuredIndex = 0;

  const featuredSlides = Array.from(featuredDealSlider.querySelectorAll('.showcase-container'));

  const goToFeaturedSlide = function (index) {
    const nextSlide = featuredSlides[index];
    if (!nextSlide) return;

    featuredDealSlider.scrollTo({
      left: nextSlide.offsetLeft,
      behavior: 'smooth'
    });
  };

  if (featuredSlides.length > 1) {
    setInterval(() => {
      featuredIndex = (featuredIndex + 1) % featuredSlides.length;
      goToFeaturedSlide(featuredIndex);
    }, 4200);
  }
}




// slider arrows
const sliderShells = document.querySelectorAll('.slider-shell');

sliderShells.forEach((shell) => {
  const track = shell.querySelector('[data-slider-track]');
  const prevBtn = shell.querySelector('[data-slider-prev]');
  const nextBtn = shell.querySelector('[data-slider-next]');

  if (!track || !prevBtn || !nextBtn) return;

  const isShowcaseTrack = track.classList.contains('showcase-wrapper');

  const updateSliderButtons = function () {
    if (!isShowcaseTrack) return;

    const maxScrollLeft = Math.max(track.scrollWidth - track.clientWidth, 0);
    const atStart = track.scrollLeft <= 4;
    const atEnd = track.scrollLeft >= maxScrollLeft - 4;

    prevBtn.style.display = atStart ? 'none' : 'grid';
    nextBtn.style.display = atEnd ? 'none' : 'grid';
  };

  const scrollStep = function (direction) {
    const amount = track.clientWidth * 0.9;

    track.scrollBy({
      left: direction * amount,
      behavior: 'smooth'
    });
  };

  prevBtn.addEventListener('click', function () {
    scrollStep(-1);
  });

  nextBtn.addEventListener('click', function () {
    scrollStep(1);
  });

  if (isShowcaseTrack) {
    track.addEventListener('scroll', updateSliderButtons, { passive: true });
    window.addEventListener('resize', updateSliderButtons);
    updateSliderButtons();
  }
});




// sticky header behavior
const siteHeader = document.querySelector('.storefront header');

if (siteHeader) {
  let lastScrollY = window.scrollY;

  const updateHeaderState = function () {
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY;
    const passedThreshold = currentScrollY > 120;

    siteHeader.classList.toggle('is-compact', currentScrollY > 40);

    if (passedThreshold && scrollingDown && currentScrollY - lastScrollY > 2) {
      siteHeader.classList.add('is-hidden');
    } else if (currentScrollY < lastScrollY) {
      siteHeader.classList.remove('is-hidden');
      siteHeader.classList.add('is-compact');
    } else if (currentScrollY <= 20) {
      siteHeader.classList.remove('is-hidden');
      siteHeader.classList.remove('is-compact');
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', updateHeaderState, { passive: true });
}




// cart and wishlist
const STORAGE_KEYS = {
  cart: 'storefront-cart',
  wishlist: 'storefront-wishlist'
};

const productCatalog = new Map();
const commercePanel = document.querySelector('[data-commerce-panel]');
const commerceBackdrop = document.querySelector('[data-commerce-backdrop]');
const commerceCloseButton = document.querySelector('[data-commerce-close]');
const commerceList = document.querySelector('[data-commerce-list]');
const commerceTitle = document.querySelector('[data-commerce-title]');
const commerceKicker = document.querySelector('[data-commerce-kicker]');
const commerceSubtotal = document.querySelector('[data-commerce-subtotal]');
const commerceSummaryMeta = document.querySelector('[data-commerce-summary-meta]');
const commerceSummaryLabel = document.querySelector('[data-commerce-summary-label]');
const commerceSummaryAction = document.querySelector('[data-commerce-summary-action]');
const commerceHeadingLeft = document.querySelector('[data-commerce-heading-left]');

const commerceState = {
  cart: loadStoredValue(STORAGE_KEYS.cart, {}),
  wishlist: loadStoredValue(STORAGE_KEYS.wishlist, []),
  panelView: 'cart'
};

function loadStoredValue(key, fallback) {
  try {
    const rawValue = window.localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallback;
  } catch (error) {
    return fallback;
  }
}

function saveCommerceState() {
  try {
    window.localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(commerceState.cart));
    window.localStorage.setItem(STORAGE_KEYS.wishlist, JSON.stringify(commerceState.wishlist));
  } catch (error) {
    return;
  }
}

function slugifyProduct(value) {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function parsePriceValue(value) {
  const amount = Number.parseFloat(String(value || '').replace(/[^0-9.]/g, ''));
  return Number.isNaN(amount) ? 0 : amount;
}

function extractProductData(card) {
  if (!card) return null;

  const titleElement = card.querySelector('.showcase-title');
  const title = titleElement ? titleElement.textContent.trim() : '';

  if (!title) return null;

  const categoryElement = card.querySelector('.showcase-category');
  const priceElement = card.querySelector('.price');
  const imageElement = card.querySelector('.product-img.default, .showcase-img, .product-img');
  const category = categoryElement ? categoryElement.textContent.trim() : 'Featured';
  const price = priceElement ? parsePriceValue(priceElement.textContent) : 0;
  const image = imageElement ? imageElement.getAttribute('src') || '' : '';
  const id = card.dataset.productId || slugifyProduct(title);

  card.dataset.productId = id;

  return { id, title, category, price, image };
}

function registerProduct(product) {
  if (!product || !product.id) return;

  if (!productCatalog.has(product.id)) {
    productCatalog.set(product.id, product);
  }
}

function getProductById(productId) {
  return productCatalog.get(productId) || null;
}

function updateCounterValue(selector, value) {
  document.querySelectorAll(selector).forEach((counter) => {
    counter.textContent = value;
  });
}

function updateCommerceCounters() {
  const cartCount = Object.values(commerceState.cart).reduce((total, quantity) => total + quantity, 0);
  const wishlistCount = commerceState.wishlist.length;

  updateCounterValue('.header-user-actions .action-btn:nth-of-type(2) .count', wishlistCount);
  updateCounterValue('.header-user-actions .action-btn:nth-of-type(3) .count', cartCount);
  updateCounterValue('.mobile-bottom-navigation .action-btn:nth-of-type(2) .count', cartCount);
  updateCounterValue('.mobile-bottom-navigation .action-btn:nth-of-type(4) .count', wishlistCount);
}

function updateWishlistButtons() {
  document.querySelectorAll('[data-add-to-wishlist]').forEach((button) => {
    const card = button.closest('.showcase');
    const product = extractProductData(card);

    if (!product) return;

    const isActive = commerceState.wishlist.includes(product.id);
    const icon = button.querySelector('ion-icon');

    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    button.setAttribute('aria-label', isActive ? 'Remove from wishlist' : 'Add to wishlist');
    button.setAttribute('title', isActive ? 'Remove from wishlist' : 'Add to wishlist');

    if (icon) {
      icon.setAttribute('name', isActive ? 'heart' : 'heart-outline');
    }
  });
}

function syncCommerceUI() {
  updateCommerceCounters();
  updateWishlistButtons();
  renderCommercePanel();
}

function addToCart(product) {
  commerceState.cart[product.id] = (commerceState.cart[product.id] || 0) + 1;
  saveCommerceState();
  syncCommerceUI();
}

function toggleWishlist(product) {
  const currentIndex = commerceState.wishlist.indexOf(product.id);

  if (currentIndex >= 0) {
    commerceState.wishlist.splice(currentIndex, 1);
  } else {
    commerceState.wishlist.push(product.id);
  }

  saveCommerceState();
  syncCommerceUI();
}

function removeFromWishlist(productId) {
  commerceState.wishlist = commerceState.wishlist.filter((itemId) => itemId !== productId);
  saveCommerceState();
  syncCommerceUI();
}

function updateCartQuantity(productId, nextQuantity) {
  if (nextQuantity <= 0) {
    delete commerceState.cart[productId];
  } else {
    commerceState.cart[productId] = nextQuantity;
  }

  saveCommerceState();
  syncCommerceUI();
}

function formatPrice(amount) {
  return `$${amount.toFixed(2)}`;
}

function createCommerceItemMarkup(item, view) {
  const image = item.image || './assets/images/products/1.jpg';
  const quantityControl = view === 'cart'
    ? `<div class="commerce-item-qty" aria-label="Quantity controls">
        <button type="button" data-qty-decrease="${item.id}" aria-label="Decrease quantity">
          <ion-icon name="remove-outline"></ion-icon>
        </button>
        <span>${item.quantity}</span>
        <button type="button" data-qty-increase="${item.id}" aria-label="Increase quantity">
          <ion-icon name="add-outline"></ion-icon>
        </button>
      </div>`
    : `<span class="commerce-item-pill">${t('saved_badge')}</span>`;

  const secondaryActions = view === 'cart'
    ? `<button type="button" data-remove-cart="${item.id}">${t('remove')}</button>
       <button type="button" data-move-to-wishlist="${item.id}">${t('move_to_wishlist')}</button>`
    : `<button type="button" data-remove-wishlist="${item.id}">${t('remove')}</button>
       <button type="button" data-wishlist-to-cart="${item.id}">${t('add_to_cart')}</button>`;

  const price = view === 'cart' ? formatPrice(item.price * item.quantity) : formatPrice(item.price);

  return `
    <article class="commerce-item">
      <div class="commerce-item-media">
        <img src="${image}" alt="${item.title}">
      </div>
      <div class="commerce-item-info">
        <div class="commerce-item-copy">
          <p class="commerce-item-title">${item.title}</p>
          <p class="commerce-item-category">${item.category}</p>
          <p class="commerce-item-stock">${view === 'cart' ? t('ready_to_ship') : t('saved_for_later')}</p>
        </div>
        <div class="commerce-item-actions">
          ${quantityControl}
          <div class="commerce-item-links">
            ${secondaryActions}
          </div>
        </div>
      </div>
      <div class="commerce-item-price">${price}</div>
    </article>
  `;
}

function getCartItems() {
  return Object.entries(commerceState.cart)
    .map(([id, quantity]) => {
      const product = getProductById(id);
      if (!product) return null;

      return { ...product, quantity };
    })
    .filter(Boolean);
}

function getWishlistItems() {
  return commerceState.wishlist
    .map((id) => getProductById(id))
    .filter(Boolean);
}

function renderEmptyState(view) {
  const heading = view === 'cart' ? t('empty_cart_title') : t('empty_wishlist_title');
  const text = view === 'cart' ? t('empty_cart_text') : t('empty_wishlist_text');

  return `
    <div class="commerce-empty-state">
      <ion-icon name="${view === 'cart' ? 'bag-handle-outline' : 'heart-outline'}"></ion-icon>
      <h3>${heading}</h3>
      <p>${text}</p>
    </div>
  `;
}

function renderCommercePanel() {
  if (!commerceList || !commerceTitle) return;

  const view = commerceState.panelView;
  const items = view === 'cart' ? getCartItems() : getWishlistItems();
  const totalItems = view === 'cart'
    ? items.reduce((sum, item) => sum + item.quantity, 0)
    : items.length;
  const subtotal = view === 'cart'
    ? items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : items.reduce((sum, item) => sum + item.price, 0);

  commerceTitle.textContent = view === 'cart' ? t('shopping_cart') : t('my_wishlist');
  commerceKicker.textContent = view === 'cart' ? t('saved_picks') : t('saved_picks');
  commerceHeadingLeft.textContent = view === 'cart' ? t('items') : t('saved_products');
  commerceSummaryLabel.textContent = view === 'cart' ? t('subtotal') : t('wishlist_value');
  commerceSummaryMeta.textContent = view === 'cart'
    ? `${totalItems} ${totalItems === 1 ? t('item_selected') : t('items_selected')}`
    : `${totalItems} ${totalItems === 1 ? t('product_saved') : t('products_saved')}`;
  commerceSummaryAction.textContent = view === 'cart' ? t('proceed_checkout') : t('review_saved');
  commerceSubtotal.textContent = formatPrice(subtotal);

  if (!items.length) {
    commerceList.innerHTML = renderEmptyState(view);
    return;
  }

  commerceList.innerHTML = items.map((item) => createCommerceItemMarkup(item, view)).join('');
}

function setCommercePanelState(isOpen) {
  if (!commercePanel || !commerceBackdrop) return;

  commercePanel.classList.toggle('is-open', isOpen);
  commerceBackdrop.classList.toggle('is-open', isOpen);
  commercePanel.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  document.body.classList.toggle('commerce-panel-open', isOpen);

  if (siteHeader) {
    if (window.innerWidth <= 767) {
      siteHeader.style.display = isOpen ? 'none' : '';
    } else {
      siteHeader.style.display = '';
      siteHeader.classList.toggle('is-compact', isOpen || window.scrollY > 40);
      siteHeader.classList.toggle('is-hidden', false);
    }
  }
}

function openCommercePanel(view) {
  commerceState.panelView = view;
  renderCommercePanel();
  setCommercePanelState(true);
}

function closeCommercePanel() {
  setCommercePanelState(false);
}

function smoothScrollToSection(targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  const headerOffset = window.innerWidth <= 767 ? 24 : 110;
  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  const distance = targetY - startY;
  const duration = 900;
  let startTime = null;

  const easeInOutCubic = function (progress) {
    return progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  };

  const step = function (timestamp) {
    if (!startTime) startTime = timestamp;

    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
}

function createActionButton(type, label, iconName, extraClass) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = extraClass;
  button.setAttribute(type, '');
  button.setAttribute('aria-label', label);
  button.setAttribute('title', label);
  button.innerHTML = `<ion-icon name="${iconName}"></ion-icon><span>${label}</span>`;
  return button;
}

function enhanceProductCards() {
  const cards = document.querySelectorAll('.sidebar .showcase, .product-minimal .showcase, .product-featured .showcase, .product-grid .showcase');

  cards.forEach((card) => {
    const product = extractProductData(card);
    if (!product) return;
    registerProduct(product);

    const heartButton = Array.from(card.querySelectorAll('button')).find((button) => {
      const icon = button.querySelector('ion-icon');
      return icon && icon.getAttribute('name') === 'heart-outline';
    });

    const cartButton = Array.from(card.querySelectorAll('button')).find((button) => {
      const icon = button.querySelector('ion-icon');
      return icon && icon.getAttribute('name') === 'bag-add-outline';
    });

    if (heartButton) {
      heartButton.setAttribute('data-add-to-wishlist', '');
      heartButton.setAttribute('aria-label', 'Add to wishlist');
      heartButton.setAttribute('title', 'Add to wishlist');
    }

    if (cartButton) {
      cartButton.setAttribute('data-add-to-cart', '');
      cartButton.setAttribute('aria-label', 'Add to cart');
      cartButton.setAttribute('title', 'Add to cart');
    }

    if (card.closest('.product-grid')) return;

    if (card.closest('.product-featured')) {
      const featuredCartButton = card.querySelector('.add-cart-btn');
      const content = card.querySelector('.showcase-content');

      if (featuredCartButton && content && !content.querySelector('.storefront-product-actions')) {
        featuredCartButton.setAttribute('data-add-to-cart', '');
        featuredCartButton.setAttribute('type', 'button');

        const actionRow = document.createElement('div');
        actionRow.className = 'storefront-product-actions storefront-product-actions-featured';

        const wishlistButton = createActionButton('data-add-to-wishlist', 'Wishlist', 'heart-outline', 'storefront-action-icon');

        featuredCartButton.parentNode.insertBefore(actionRow, featuredCartButton);
        actionRow.append(featuredCartButton, wishlistButton);
      }

      return;
    }

    const content = card.querySelector('.showcase-content');
    const priceBox = content ? content.querySelector('.price-box') : null;

    if (!content || !priceBox || content.querySelector('.storefront-product-actions')) return;

    const actionRow = document.createElement('div');
    actionRow.className = 'storefront-product-actions storefront-product-actions-compact';

    const cartAction = createActionButton('data-add-to-cart', 'Add to cart', 'bag-add-outline', 'storefront-action-chip');
    const wishlistAction = createActionButton('data-add-to-wishlist', 'Wishlist', 'heart-outline', 'storefront-action-icon');

    actionRow.append(cartAction, wishlistAction);
    priceBox.insertAdjacentElement('afterend', actionRow);
  });
}

document.addEventListener('click', function (event) {
  const openCartTrigger = event.target.closest('[data-open-cart]');
  const openWishlistTrigger = event.target.closest('[data-open-wishlist]');
  const cartTrigger = event.target.closest('[data-add-to-cart]');
  const wishlistTrigger = event.target.closest('[data-add-to-wishlist]');
  const increaseTrigger = event.target.closest('[data-qty-increase]');
  const decreaseTrigger = event.target.closest('[data-qty-decrease]');
  const removeCartTrigger = event.target.closest('[data-remove-cart]');
  const removeWishlistTrigger = event.target.closest('[data-remove-wishlist]');
  const moveToWishlistTrigger = event.target.closest('[data-move-to-wishlist]');
  const moveToCartTrigger = event.target.closest('[data-wishlist-to-cart]');

  if (openCartTrigger) {
    event.preventDefault();
    openCommercePanel('cart');
  }

  if (openWishlistTrigger) {
    event.preventDefault();
    openCommercePanel('wishlist');
  }

  const scrollTrigger = event.target.closest('a[href^="#"]');

  if (scrollTrigger) {
    const href = scrollTrigger.getAttribute('href');

    if (href && href.length > 1) {
      const target = document.querySelector(href);

      if (target) {
        event.preventDefault();
        smoothScrollToSection(href);
      }
    }
  }

  if (cartTrigger) {
    event.preventDefault();

    const product = extractProductData(cartTrigger.closest('.showcase'));
    if (product) addToCart(product);
  }

  if (wishlistTrigger) {
    event.preventDefault();

    const product = extractProductData(wishlistTrigger.closest('.showcase'));
    if (product) toggleWishlist(product);
  }

  if (increaseTrigger) {
    event.preventDefault();
    const productId = increaseTrigger.dataset.qtyIncrease;
    updateCartQuantity(productId, (commerceState.cart[productId] || 0) + 1);
  }

  if (decreaseTrigger) {
    event.preventDefault();
    const productId = decreaseTrigger.dataset.qtyDecrease;
    updateCartQuantity(productId, (commerceState.cart[productId] || 0) - 1);
  }

  if (removeCartTrigger) {
    event.preventDefault();
    updateCartQuantity(removeCartTrigger.dataset.removeCart, 0);
  }

  if (removeWishlistTrigger) {
    event.preventDefault();
    removeFromWishlist(removeWishlistTrigger.dataset.removeWishlist);
  }

  if (moveToWishlistTrigger) {
    event.preventDefault();
    const productId = moveToWishlistTrigger.dataset.moveToWishlist;
    const product = getProductById(productId);

    if (product && !commerceState.wishlist.includes(productId)) {
      commerceState.wishlist.push(productId);
    }

    updateCartQuantity(productId, 0);
  }

  if (moveToCartTrigger) {
    event.preventDefault();
    const productId = moveToCartTrigger.dataset.wishlistToCart;
    const product = getProductById(productId);

    if (product) {
      addToCart(product);
      removeFromWishlist(productId);
    }
  }
});

if (commerceCloseButton) {
  commerceCloseButton.addEventListener('click', closeCommercePanel);
}

if (commerceBackdrop) {
  commerceBackdrop.addEventListener('click', closeCommercePanel);
}

if (commercePanel) {
  commercePanel.addEventListener('click', function (event) {
    if (!event.target.closest('.commerce-panel-main, .commerce-summary-card')) {
      closeCommercePanel();
    }
  });
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeCommercePanel();
  }
});

if (languageSelect) {
  if (!translations[currentLanguage]) {
    currentLanguage = 'en-US';
  }

  languageSelect.value = currentLanguage;

  languageSelect.addEventListener('change', function (event) {
    currentLanguage = translations[event.target.value] ? event.target.value : 'en-US';
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
    applyTranslations();
    renderCommercePanel();
  });
}

enhanceProductCards();
applyTranslations();
syncCommerceUI();
