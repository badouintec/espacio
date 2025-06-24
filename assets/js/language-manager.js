/**
 * Language Manager para el III Coloquio Internacional
 * Gestiona el cambio de idioma sin romper funcionalidades existentes
 */

class LanguageManager {
  constructor() {
    this.currentLanguage = 'es';
    this.isInitialized = false;
  }

  /**
   * Inicializa el sistema de idiomas
   */
  init() {
    if (this.isInitialized) return;
    
    try {
      // Cargar idioma guardado o detectar idioma del navegador
      this.currentLanguage = this.getSavedLanguage() || this.detectBrowserLanguage();
      
      // Configurar event listeners para los botones de idioma
      this.setupLanguageButtons();
      
      // Aplicar idioma inicial
      this.applyLanguage(this.currentLanguage);
      
      this.isInitialized = true;
      console.log('Language Manager initialized successfully');
    } catch (error) {
      console.error('Error initializing Language Manager:', error);
    }
  }

  /**
   * Detecta el idioma del navegador
   */
  detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('es') ? 'es' : 'en';
  }

  /**
   * Obtiene el idioma guardado en localStorage
   */
  getSavedLanguage() {
    return localStorage.getItem('coloquio-language');
  }

  /**
   * Guarda el idioma en localStorage
   */
  saveLanguage(lang) {
    localStorage.setItem('coloquio-language', lang);
  }

  /**
   * Configura los event listeners para los botones de idioma
   */
  setupLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = button.getAttribute('data-lang');
        if (selectedLang && selectedLang !== this.currentLanguage) {
          this.changeLanguage(selectedLang);
        }
      });
    });
  }

  /**
   * Cambia el idioma del sitio
   */
  changeLanguage(newLang) {
    if (!translations[newLang]) {
      console.error(`Language '${newLang}' not found in translations`);
      return;
    }

    this.currentLanguage = newLang;
    this.applyLanguage(newLang);
    this.saveLanguage(newLang);
    this.updateLanguageButtons();
  }

  /**
   * Aplica las traducciones al DOM
   */
  applyLanguage(lang) {
    if (!translations[lang]) return;

    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-lang');
      const translation = this.getTranslationByKey(key, lang);
      
      if (translation) {
        // Manejar placeholders para inputs
        if (element.hasAttribute('placeholder')) {
          element.setAttribute('placeholder', translation);
        } else {
          // Usar innerHTML para permitir tags HTML en traducciones
          if (element.innerHTML !== translation) {
            element.innerHTML = translation;
          }
        }
      }
    });
  }

  /**
   * Obtiene una traducción por clave
   */
  getTranslationByKey(key, lang) {
    try {
      const keys = key.split('.');
      let value = translations[lang];
      
      for (const k of keys) {
        value = value[k];
        if (value === undefined) return null;
      }
      
      return value;
    } catch (error) {
      console.warn(`Translation key '${key}' not found for language '${lang}'`);
      return null;
    }
  }

  /**
   * Actualiza el estado visual de los botones de idioma
   */
  updateLanguageButtons() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
      const buttonLang = button.getAttribute('data-lang');
      if (buttonLang === this.currentLanguage) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }

  /**
   * Obtiene el idioma actual
   */
  getCurrentLanguage() {
    return this.currentLanguage;
  }
}

// Instancia global del gestor de idiomas
window.languageManager = new LanguageManager();