/* =============================================
   OrderComplete.js — Byway UX Course Page
   ============================================= */

(function () {
  'use strict';

  /* ─── STICKY HEADER SHADOW ─── */
  const siteHeader = document.getElementById('siteHeader');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      siteHeader.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });
  }

  /* ─── HAMBURGER MENU ─── */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
      }
    });
  }

  /* ─── TABS ─── */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabButtons.forEach((b) => b.classList.remove('active'));
      tabContents.forEach((c) => c.classList.remove('active'));

      btn.classList.add('active');
      const targetContent = document.getElementById('tab-' + target);
      if (targetContent) targetContent.classList.add('active');
    });
  });

  /* ─── ACCORDION ─── */
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach((header) => {
    header.addEventListener('click', () => {
      const section = header.closest('.accordion-section');
      const isOpen = section.classList.contains('open');

      // Close all
      document.querySelectorAll('.accordion-section').forEach((s) => s.classList.remove('open'));

      // Toggle clicked
      if (!isOpen) {
        section.classList.add('open');
      }
    });
  });

  /* ─── CAROUSEL ─── */
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');

  if (track && prevBtn && nextBtn) {
    let currentIndex = 0;

    function getVisibleCount() {
      const outerWidth = track.parentElement.offsetWidth;
      const card = track.querySelector('.carousel-card');
      if (!card) return 1;
      const cardWidth = card.offsetWidth + 14; // gap = 14px
      return Math.round(outerWidth / cardWidth);
    }

    function getTotalCards() {
      return track.querySelectorAll('.carousel-card').length;
    }

    function updateCarousel() {
      const card = track.querySelector('.carousel-card');
      if (!card) return;
      const cardWidth = card.offsetWidth + 14;
      const maxIndex = Math.max(0, getTotalCards() - getVisibleCount());
      currentIndex = Math.min(currentIndex, maxIndex);
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex >= maxIndex;
    }

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) { currentIndex--; updateCarousel(); }
    });

    nextBtn.addEventListener('click', () => {
      const maxIndex = Math.max(0, getTotalCards() - getVisibleCount());
      if (currentIndex < maxIndex) { currentIndex++; updateCarousel(); }
    });

    window.addEventListener('resize', () => {
      currentIndex = 0;
      updateCarousel();
    }, { passive: true });

    updateCarousel();
  }

  /* ─── PLAY BUTTON (video placeholder) ─── */
  const playBtn = document.querySelector('.play-btn');
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      const wrapper = playBtn.closest('.video-wrapper');
      const thumb = wrapper.querySelector('.video-thumb');
      // Simulate play: fade thumb, show pause icon
      thumb.style.transition = 'opacity 0.3s';
      thumb.style.opacity = '0.4';
      playBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <rect x="6" y="4" width="4" height="16" rx="1"/>
        <rect x="14" y="4" width="4" height="16" rx="1"/>
      </svg>`;
      playBtn.setAttribute('aria-label', 'Pause video');
      // Toggle back on click
      playBtn.addEventListener('click', () => {
        thumb.style.opacity = '0.82';
        playBtn.innerHTML = `<svg width="28" height="28" viewBox="0 0 24 24" fill="white"><polygon points="5,3 19,12 5,21"/></svg>`;
        playBtn.setAttribute('aria-label', 'Play video');
      }, { once: true });
    });
  }

  /* ─── LESSON ITEM CLICK ─── */
  document.querySelectorAll('.lesson-item').forEach((item) => {
    item.addEventListener('click', () => {
      // Remove active from siblings
      item.closest('.accordion-body').querySelectorAll('.lesson-item').forEach((li) => {
        li.classList.remove('active-lesson');
        li.querySelector('.lesson-num')?.classList.remove('active-num');
        const status = li.querySelector('.lesson-status');
        if (status) status.classList.remove('playing');
      });
      // Set clicked as active
      item.classList.add('active-lesson');
      item.querySelector('.lesson-num')?.classList.add('active-num');
      const status = item.querySelector('.lesson-status');
      if (status) {
        status.textContent = '▶';
        status.classList.add('playing');
      }
    });
  });

  /* ─── SMOOTH SCROLL for anchor links ─── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const offset = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    });
  });

})();
