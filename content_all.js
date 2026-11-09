window.location.hostname.includes('app.grammarly.com') &&
  document.body.addEventListener('mouseover', function () {
    const _0x4392dd = document.querySelector('[data-name="logout-lnk"]')
    _0x4392dd &&
      (_0x4392dd.remove(), console.log('Grammarly logout button removed!'))
  })
;(function () {
  'use strict'
  function _0x4d327f(_0xba6e79) {
    var _0x789b3e
    return (
      (_0x789b3e =
        _0xba6e79.indexOf('//') > -1
          ? _0xba6e79.split('/')[2]
          : _0xba6e79.split('/')[0]).length > 2 &&
        (_0x789b3e = _0x789b3e.split('.').slice(-2).join('.')),
      _0x789b3e
    )
  }
  function _0x47e565(_0x1a42f8) {
    var _0x13f297 = btoa(_0x1a42f8.domain),
      _0xedee92 = { o: _0x13f297 }
    chrome.runtime.sendMessage(
      {
        type: 'get',
        data: JSON.stringify(_0xedee92),
      },
      function (_0x386085) {
        if (_0x386085) {
          var _0x181c4d = JSON.parse(_0x386085)
          setTimeout(() => {
            var _0x294d92 = document.querySelector(_0x1a42f8.field.email),
              _0x32b974 = document.querySelector(_0x1a42f8.field.pwd)
            if (_0x294d92 && _0x32b974) {
              _0x294d92.value = _0x181c4d.cr[0]
              _0x32b974.value = _0x181c4d.cr[1]
              _0x1a42f8.disableFields.forEach(function (_0x2cc59e) {
                document.querySelector(_0x2cc59e) &&
                  ((document.querySelector(_0x2cc59e).style.pointerEvents =
                    'none'),
                  (document.querySelector(_0x2cc59e).style.opacity = '0'))
              })
              document.querySelector(_0x1a42f8.submitBtn).click()
              var _0x161cbd = { o: _0x13f297 }
              chrome.runtime.sendMessage(
                {
                  type: 'rmv',
                  data: JSON.stringify(_0x161cbd),
                },
                function (_0xc1251a) {}
              )
            }
          }, _0x1a42f8.delay * 1000)
        }
      }
    )
  }
  function _0x3eeb02(_0x5e2478, _0xa39cd7) {
    var _0x571d61 = btoa(_0x5e2478),
      _0xb4def5 = { o: _0x571d61 }
    chrome.runtime.sendMessage(
      {
        type: 'get',
        data: JSON.stringify(_0xb4def5),
      },
      function (_0x51d2c1) {
        _0x51d2c1 && _0xa39cd7()
      }
    )
  }
  function _0x3cfa4b(_0x4d6af4, _0x5c28cb) {
    var _0x520de1 = btoa(_0x4d6af4),
      _0x3c77a5 = { o: _0x520de1 }
    chrome.runtime.sendMessage(
      {
        type: 'get',
        data: JSON.stringify(_0x3c77a5),
      },
      function (_0x50fd8f) {
        _0x50fd8f &&
          (document.body.insertAdjacentHTML(
            'beforeend',
            '<style>' + _0x5c28cb + '</style>'
          ),
          _0x4d6af4 == 'envato.com' &&
            !sessionStorageStorage.tlz_reload &&
            ((sessionStorageStorage.tlz_reload = 1), location.reload()))
      }
    )
  }
  function _0x1d68ba(_0x463ee7, _0x578fdb) {
    var _0x3aee6e = btoa(_0x463ee7),
      _0x39b106 = { o: _0x3aee6e }
    chrome.runtime.sendMessage(
      {
        type: 'get',
        data: JSON.stringify(_0x39b106),
      },
      function (_0x28fb88) {
        if (_0x28fb88) {
          let _0x5a86ec = document.createElement('script')
          _0x5a86ec.textContent = '' + _0x578fdb
          document.body.appendChild(_0x5a86ec)
        }
      }
    )
  }
  function _0x3d4137(_0xc7ecee) {
    var _0x328a7b = btoa(_0xc7ecee),
      _0x2ba35a = { o: _0x328a7b }
    chrome.runtime.sendMessage(
      {
        type: 'get',
        data: JSON.stringify(_0x2ba35a),
      },
      function (_0xc0806b) {
        _0xc0806b &&
          (function () {
            'use strict'
            let _0x3901c5 = {
                isOpen: false,
                orientation: undefined,
              },
              _0x4767c2 = (_0x47094c, _0x9ce0f1) => {
                window.dispatchEvent(
                  new CustomEvent('ssssss', {
                    detail: {
                      isOpen: _0x47094c,
                      orientation: _0x9ce0f1,
                    },
                  })
                )
              },
              _0xa66568 = ({ emitEvents: emitEvents = true } = {}) => {
                let _0x256410 = window.outerWidth / 4,
                  _0x3c7790 = window.outerHeight / 3,
                  _0x4f0f35 = window.outerWidth - window.innerWidth > _0x256410,
                  _0x10f01f =
                    window.outerHeight - window.innerHeight > _0x3c7790,
                  _0x17e7ef = _0x4f0f35 ? 'vertical' : 'horizontal'
                ;(_0x10f01f && _0x4f0f35) ||
                ((!window.Firebug ||
                  !window.Firebug.chrome ||
                  !window.Firebug.chrome.isInitialized) &&
                  !_0x4f0f35 &&
                  !_0x10f01f)
                  ? (_0x3901c5.isOpen &&
                      emitEvents &&
                      _0x4767c2(false, undefined),
                    (_0x3901c5.isOpen = false),
                    (_0x3901c5.orientation = undefined))
                  : ((!_0x3901c5.isOpen ||
                      _0x3901c5.orientation !== _0x17e7ef) &&
                      !!emitEvents &&
                      _0x4767c2(true, _0x17e7ef),
                    (_0x3901c5.isOpen = true),
                    (_0x3901c5.orientation = _0x17e7ef))
              }
            _0xa66568({ emitEvents: false })
            setInterval(_0xa66568, 50)
            typeof module != 'undefined' && module.exports
              ? (module.exports = _0x3901c5)
              : (window.ssssss = _0x3901c5)
            window.ssssss.isOpen
              ? chrome.runtime.sendMessage({ x93939: 'x93939' })
              : window.addEventListener('ssssss', (_0x2d691a) => {
                  _0x2d691a.detail.isOpen &&
                    chrome.runtime.sendMessage(
                      { x93939: 'x93939' },
                      function (_0x4ccf21) {
                        chrome.runtime.sendMessage({ x93939: 'x93939' })
                      }
                    )
                })
            setInterval(function _0x31405b(_0x30e013) {
              isNaN(+_0x30e013) && (_0x30e013 = 100)
              var _0x5dc739 = +new Date()
              debugger
              var _0xbcfc19 = +new Date()
              ;(isNaN(_0x5dc739) ||
                isNaN(_0xbcfc19) ||
                _0xbcfc19 - _0x5dc739 > _0x30e013) &&
                chrome.runtime.sendMessage({ x93939: 'x93939' })
            }, 2000)
          })()
      }
    )
  }
  const _0x4d7555 = location.href
  let _0x3c8de1 = _0x4d327f(_0x4d7555)
  _0x3d4137(_0x3c8de1)
  window.onload = function () {
    _0x3eeb02(_0x3c8de1)
    if (_0x3c8de1 == 'vidiq.com') {
      document.querySelector('button.chakra-button.css-movs5u').style.display =
        'none'
      _0x47e565({
        domain: _0x3c8de1,
        field: {
          email: "input[type='email']",
          pwd: "input[type='password']",
        },
        disableFields: [
          "input[type='email']",
          "input[type='password']",
          'button.chakra-button.css-movs5u',
        ],
        submitBtn: "button[type='submit']",
        delay: 1,
      })
    } else {
      if (_0x3c8de1 == 'quillbot.com') {
        _0x47e565({
          domain: _0x3c8de1,
          field: {
            email: "input[type='text']",
            pwd: "input[type='password']",
          },
          disableFields: ["input[type='text']", "input[type='password']"],
          submitBtn: 'button.auth-btn',
          delay: 2,
        })
      } else {
        _0x3c8de1 == 'turnitin.com' &&
          _0x47e565({
            domain: _0x3c8de1,
            field: {
              email: "input[type='text']",
              pwd: "input[type='password']",
            },
            disableFields: ["input[type='text']", "input[type='password']"],
            submitBtn: "input[type='submit']",
            delay: 1,
          })
      }
    }
    _0x3c8de1 == 'vyond.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .user-button,\n                    .home-cta h2{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'canva.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .R3lH9w.DwB3TQ,.EVWsgA.N7Hjzg {\n                    display: none !important;\n                }\n                a[href="/settings/people"]{\n                    display: none !important;\n                }\n                .Tz6Wwg,\n                a[href="/folder/trash"],\n                a[href="/settings/manage-teams"]{\n                    display: none !important;\n                }\n            '
      )
    _0x3c8de1 == 'semrush.com' &&
      (_0x3cfa4b(
        _0x3c8de1,
        '\n                a[href="/sso/logout"]{\n                    display: none !important;\n                }\n           .srf-navbar__right {\n               display: none !important;\n           }\n            '
      ),
      _0x1d68ba(
        _0x3c8de1,
        '\n            if(document.querySelector(\'div.kwo-capacity-counter[data-ui-name="Counter"][data-test="capacity-counter"]\')){\n                sessionStorage.setItem("namematric", document.querySelector(\'div.kwo-capacity-counter[data-ui-name="Counter"][data-test="capacity-counter"]\').innerText);\n\n                if(sessionStorage.getItem("namematric") == "1,000/1,000"){\n                    document.querySelector(\'.kwo-report-controls__controls .kwo-overview-metric-update__button-wrapper\').style.display = "none";\n                    document.querySelector(\'.___SButton_xrrcg-ko_._size_m_xrrcg-ko_._theme_primary-info_xrrcg-ko_\').style.display = "none";\n                }\n            }\n        if(sessionStorage.getItem("namematric") == "1,000/1,000"){\n            document.querySelector(\'button[data-test="bulk-update-btn"]\').style.display = "none";\n            document.querySelectorAll(\'.sm-last-changes-cell__icon-wrapper\').forEach(function (els) {\n                els.style.display = "none";\n            });\n            document.querySelectorAll(\'.sm-last-changes-cell__icon-wrapper\').forEach(function (elss) {\n                elss.style.display = "none";\n            });\n        }\n        '
      ))
    _0x3c8de1 == 'udemy.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n            .popper-module--popper--2BpLn.list-menu--list-menu-container--2sI5k,.popper-module--popper--mM5Ie.list-menu-module--list-menu-container--8oKTW,.user-profile-dropdown-module--dropdown-button-avatar--CffDQ.ud-avatar.ud-heading-sm {\n                display: none !important;\n            }\n            .user-occupation-header--user-section--286mZ{\n                display: none !important;\n            }\n            .popper-module--popper--2BpLn.list-menu-module--list-menu-container--3d8ZF,.popper_popper__jZgEv.list-menu_list-menu-container__JqVwA{\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'moz.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n             #globalnav .mgn-profile.mgn-selectable{\n                    display: none !important;\n                }\n            .mzr-nav-item.mzr-dropdown.mzr-megamenu.mzr-avatar.js-avatar {\n                display: none !important;\n            }\n            .info.alert-page,.alert-page.info{\n                display: none !important;\n            }\n            .mgn-discover{\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'neilpatel.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n            div.sc-cSiBin.DKeaZ {\n                display: none !important;\n            }\n            [data-testid="nav-logo-button"]{\n                display: none !important;\n            }\n            [data-testid="sing-out"] {\n                pointer-events: none !important;\n                display: none !important;\n              }\n              .sc-kQfUkn.jkhBVh,\n              .gwnMfI{\n                display: none !important;\n              }\n              a.sc-ezzayL.gOhroU{\n                display: none !important;\n              }\n              input[type="text"].sc-fBFNZt.eASmfP.sc-eIERiQ.cIVvZc,\n              button.sc-laZMyp.cagcLv,\n              a[href="/manage_users"]{\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'linkedin.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                #hue-menu-trigger-ember15 {\n                display: none !important;\n            }\n            .eah-menu-content__list-item a[href="/sales/logout?trk=d_sales2_app_header_logout"]{\n                display: none !important;\n            }\n            a[href="/m/logout/"]{\n                display: none !important;\n            }\n            button[id="hue-menu-trigger-ember20"],\n            .sidebar-nav__settings a,\n            button#ember24{\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'skillshare.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .nav-item.nav-menu-user-avatar.js-nav-menu-user-avatar,\n                .jss46,\n                a.profile-avatar {\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'turnitin.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                #top_nav{\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'grammarly.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                ._95a0edad-index_navigation-logout._f736b103-index_navigation-item,\n                a[href="https://support.grammarly.com/login"][data-name="support-lnk"],\n                div[data-name="logout-lnk"],\n                span[data-name="username"] {\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'mxspeech.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .tm-script-header-tools .tm-script-quick-nav .dropdown.user-dropdown,\n                a[data-toggle="dropdown"] {\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'humanpal.io' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .header-dropdown.dropdown:nth-child(4),\n                li.nav-item a[href="/purchases"] {\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'hix.ai' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                div.coco-popover.css-cy04ac.css-cy04ac,div[class="flex items-center hover:cursor-pointer"]{\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'envato.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                a[data-testid="header-switch-to-annual"],\n                ul.YTcQ2APa a[href="/sign-out"]{\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'serpstat.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    div.user-sidebar-menu{\n                    display: none !important;\n                }\n            '
      )
    _0x3c8de1 == 'mangools.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                  div.bg-lightgrey.mg-padding-0-30.mg-padding-15-0.uk-flex.uk-flex-middle.color-black,\n                  .uk-flex.uk-flex-middle button[type="button"],\n                  div.mg-nav.uk-padding-remove,\n                  .mg-account-settings,\n                  div.uk-flex.uk-flex-middle.uk-visible-xlarge{\n                  display: none !important;\n              }\n          '
      )
    _0x3c8de1 == 'buzzsumo.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                  #settings-profile,\n                  #settings-team,\n                  button[data-v-a8e0f488],\n                  div[data-v-800b6848].relative.bg-blue-900,\n                  #headlessui-menu-button-24{\n                  display: none !important;\n              }\n          '
      )
    _0x3c8de1 == 'you.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                  div[data-testid="user-profile-button"]{\n                  display: none !important;\n              }\n          '
      )
    _0x3c8de1 == 'xound.io' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                  a[href="/login"]{\n                  display: none !important;\n              }\n          '
      )
    _0x3c8de1 == 'capcut.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                  div.work-space-header-user{\n                  display: none !important;\n              }\n          '
      )
    _0x3c8de1 == 'similarweb.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                  .UserSettingsWrapper-ZVuqp.jcRKnI{\n                  display: none !important;\n              }\n          '
      )
    _0x3c8de1 == 'wordtune.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                div.dropdown-menu{\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'offeo.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .sidebar-header__menu-wrapper .sidebar-main__nav,\n                .btn.sidebar-nav__nav:nth-child(3),\n                .sidebar-header__details{\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'seochecklist.dev' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                a[href="https://app.seochecklist.dev/logout"]{\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'thundercontent.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .Dropdown.ml-4.relative.shrink-0{\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'lovepik.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .user_inf{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'wordhero.co' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                div.slideable-menu,\n                div.bubble-element.jpanelmenu-SlidebarMenu{\n                display: none !important;\n            }\n        '
      )
    _0x3c8de1 == 'seobility.net' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    a[href="https://www.seobility.net/en/login/logout.do"],\n                    a[href="https://www.seobility.net/en/settings/userdata/"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'piktochart.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    #usersettings-dropdown,a[href="/teams/31646636/settings/workspace/members"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'animoto.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .s-user-menu-toggle.SiteNav_mainNavLink__zn8eA.SiteNav_withSublinks__Y2uPO{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'renderforest.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                        a[href="/logout"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'helium10.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    a[title="Log Out"]{\n                      display: none !important;\n                  }\n                '
      )
    _0x3c8de1 == 'scribd.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .UserDropdown-module_wrapper__OXbCB{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'linguix.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                        .header-profile,\n                        a[href="https://linguix.com/settings"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'placeit.net' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                      a[href="/logout"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'sellthetrend.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                      a[href="https://www.sellthetrend.com/logout"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'seositecheckup.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                      button.ant-btn.user-dropdown-button.ant-dropdown-trigger,.package-container{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'seoptimer.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                      .list-inline-item.dropdown.nav-dropdown,.header-discount.header-error {\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'spyfu.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .sf-account{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'designs.ai' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .jss32{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'flaticon.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .boxProfile.userProfile,\n                    .profile-container,\n                    .popover-user,\n                    .social.row,\n                    .user__links button#logout_link{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'vecteezy.com' &&
      (_0x1d68ba(
        _0x3c8de1,
        '\n            setInterval(() => {\n                document.querySelectorAll("#user-menu").forEach(function(el){\n                    el.style.display="none";\n                    clearInterval();\n                });\n            }, 1000);\n            '
      ),
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    a[data-method="get"],\n                    a[href="/account/settings/profile-update-modal"],\n                    .account-pages-main,\n                    a[href="/account"],\n                    .account-pages-sidebar .account-pages-sidebar__nav .account-pages-sidebar__nav__links,\n                    #user-menu{\n                        display: none !important;\n                    }\n                '
      ))
    _0x3c8de1 == 'tuberanker.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    a[href="/logout"],\n                    .sma-navbar-user-menu{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'epidemicsound.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    div[data-testid="burgerMenuButton"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'lovo.ai' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    button.Button__StyledButton-sc-1nc0i48-0,\n                    div.SideBar__UserInfoContainer-sc-b4lzid-8{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'glorify.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .w-full.dropdown,\n                .dashboard.navbar.w-full button[type="button"].button,\n                .dashboard.navbar.w-full .dropdown:not(.dropdown--search.dropdown-on),\n                .account-menu.dropdown {\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'supermachine.art' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .bubble-element.Text.baTaRoaX.clickable-element {\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'seoscout.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .navbar-nav.ml-4{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'storybase.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    #sidebar-profile{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'prowritingaid.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .mdl-card.mdl-shadow--2dp.card-pane.actions,\n                    .mdl-card.mdl-shadow--2dp.card-pane.account-details{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'icons8.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .user.i8-header__login,\n                    .user.i8-header__login[data-v-68c71cd7]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'iconscout.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    #ddUserOptions__BV_toggle_,\n                    li.vsm-section .btn.btn-primary,\n                    .sf-account{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'nichesss.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .dropdown .dropdown-toggle[data-toggle="dropdown"],\n                    a[href="/logout"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'keywordchef.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .credit-balance-wrapper,\n                ul.navbar-nav{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'neuronwriter.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    a[onclick="ask_delete_account(); return false;"],ul#account-menu,.dropdown-menu.dropdown-menu-end.show{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'creaitor.ai' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .row.gx-5.gx-xl-10.py-2 .col-12.mb-2 h1,\n                    #kt_header_user_menu_toggle,.menu-link.switch-profiles{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'creativefabrica.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    #menu-item-icon-my-account{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'pikbest.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .header-item.header-user{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'katteb.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .-edit-profile,\n                    .-katteb-drawer-footer,\n                    .-logout,\n                    a[href="https://katteb.com/en/dashboard/manage-subscription/"],\n                    a[href="https://katteb.com/en/dashboard/me/"],\n                    .-columns-header-userarea-avatar{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'storyblocks.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    #account-dropdown,\n                    #nav-upgrade-now{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'coursera.org' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    #logout-btn,ul[id="c-ph-aai-dropdown"],button[id="right-nav-dropdown-btn"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'pngtree.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    a[href="/user/my-subscriptions"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'resemble.ai' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    a[href="/users/sign_out"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'chatabc.ai' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    nva .flex.flex-col.items-center.justify-between.px-5 button,\n                    nav .mt-4.flex.flex-row.items-center.justify-between.space-x-3.px-5{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'chatgpt.com' &&
      (setInterval(() => {
        var _0x3bf13f = document.querySelectorAll('button')
        _0x3bf13f.forEach((_0x2cd34a) => {
          var _0x127f75 = _0x2cd34a.getAttribute('data-testid')
          _0x127f75 == 'profile-button' &&
            _0x2cd34a.setAttribute('style', 'display:none;')
        })
      }, 100),
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    button[data-testid="profile-button"],div[data-side="bottom"],div[id="radix-:rq:"]{\n                        display: none !important;\n                    }\n                '
      ))
    _0x3c8de1 == 'utrrr.com' &&
      (_0x1d68ba(
        _0x3c8de1,
        '\n            document.querySelectorAll("button").forEach(function(el){\n               if(el.innerHTML == "Remove My Account"){\n                el.style.display="none";\n            }\n            });\n            '
      ),
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    #btn_submit_block,\n                    #email_address,\n                    a[href="https://utrrr.com/user/my_profile"],\n                    a[data-target="#collapsePages_user_panel_2"],\n                    li.dropdown.user-dropdown.show,\n                    .user-toggle{\n                        display: none !important;\n                    }\n                '
      ))
    _0x3c8de1 == 'airbrush.ai' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                        .dropdown.profile_log.dropdown,\n                        a[href="/logout"],\n                        a[href="/account-plan"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'lex.page' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                        .toolbar-right{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'vista.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .flex-2xOVE .userAvatarWrapper-3Lh6L{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'uplabs.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    ul.dropdown-menu.header-nav__navigation-dropdown.show,\n                    .header__menu-item.header__menu-item--profile.header__menu-dropdown-wrap.dropdown-wrap--right,\n                    .simple_form.edit_user,\n                    a[href="/users/seobd/email_settings"],\n                    .dropdown-toggle.dropdown-toggle--profile{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'copyspace.ai' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    a[href="https://www.copyspace.ai/logout"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'backlinkrepository.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    #pms_edit-profile-form,\n                    nav.pms-account-navigation,\n                    a[href="https://backlinkrepository.com/account/"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'motionarray.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .user-links,\n                    .user-dropdown{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'frase.io' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n            div[ng-if="user.userOrg.plan"] .menu-item:nth-child(4){\n                display: none !important;\n            }\n            '
      )
    _0x3c8de1 == 'freepik.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    button.gr-auth__logout-button{\n                        display: none !important;\n                    }\n                    button[data-cy="user-avatar"]{\n                        display: none !important;\n                    }\n                    div[data-cy="user-avatar"]{\n                        display: none !important;\n                    }\n                    #updateProfileBtn{\n                        display: none !important;\n                    }\n                    .profile-block{\n                        display: none !important;\n                    }\n                    .profile-container{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'steve.ai' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .profile_image_icon,\n                    a#delete_account_button,\n                    .free_section{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'answerthepublic.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    div[data-controller="micromodal"].bg-white-page.pth.pbh,\n                    a[href="/pricing"],\n                    .menu__list-separate{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'pixlr.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                #head-user,\n                #head-premium{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'gpl.market' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                a[href="https://gpl.market/memberships/"],\n                a[href="https://gpl.market/my-account/"],\n                a[href="https://gpl.market/wishlist/"],\n                a[href="https://gpl.market/cart/"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'plugintheme.net' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                ul.header-nav.header-nav-main.nav.nav-right.nav-uppercase{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'etsyhunt.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                #saasbox-nav ul.nav.nav-navbar.nav-right li:nth-child(3){\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'typito.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .user-menu.dropdown,\n                .header-container .workspace-container{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'uizard.io' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                div[data-testid="organisation-dropdown"],\n                div[id="dashboard-tour-settings"][data-testid="user-dropdown"],\n                div[id="dashboard-tour-team-link"],\n                .OrganizationSwitcherstyles__OrganizationContainer-sc-naelp-1.hwRsaH{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'slidesgo.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                header .flex.justify-end.items-center .flex.justify-end{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'rivalflow.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .account-dropdown .selector-container.flex{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'perplexity.ai' &&
      (_0x3cfa4b(
        _0x3c8de1,
        '\n                a[href="/settings/account"]{\n                        display: none !important;\n                    }\n                '
      ),
      _0x1d68ba(_0x3c8de1, '\n                \n                '))
    _0x3c8de1 == 'sincode.ai' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .clickable-element.bubble-element.Group.cnaUaMaI.bubble-r-container.flex.row,\n                .bubble-element.Text.cnaSgn{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'lumen5.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                .nav-item.user-options-dropdown.lumen5-dropdown.dropdown{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'screpy.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    #profile,\n                    #sidebar-settings,\n                    a#dropdownMenuButton,#headlessui-popover-button-nE3KxD8SGyR_0,a[href="/user/billing"]{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'writerzen.net' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    #topbar-profile-avatar{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'linksindexer.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .avatar.avatar-image{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'spinrewriter.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    .account-bar__item.account-bar__item--user,\n                    form[action="https://www.spinrewriter.com/action/cp-change-email-address"],\n                    ul.cp-my-account__navigation.content-navigation{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'closerscopy.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                    a.nav-highlight.btn-magic,\n                    #navbarDropdown{\n                        display: none !important;\n                    }\n                '
      )
    _0x3c8de1 == 'openai.com' &&
      _0x3cfa4b(
        _0x3c8de1,
        '\n                div[class="flex flex-col pt-2 empty:hidden dark:border-white/20"],\n                      div.group.relative button{\n                      display: none !important;\n                  }\n              '
      )
  }
})()
