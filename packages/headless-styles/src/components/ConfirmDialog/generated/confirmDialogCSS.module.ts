// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  keyframesFadeIn: {
    '@keyframes fadeIn': {
      from: {
        opacity: '0',
        transform: 'scale(0.9)',
      },
      to: {
        opacity: '1',
        transform: 'scale(1)',
      },
    },
  },
  '': {
    '&:root': {
      '--ps-backdrop': 'rgba(0 0 0 / 65%)',
    },
  },
  html: {
    "&[data-theme='light']": {
      '--ps-backdrop': 'rgba(255 255 255 / 65%)',
    },
  },
  light: {
    '--ps-backdrop': 'rgba(255 255 255 / 65%)',
  },
  confirmDialogBackdrop: {
    background: 'var(--ps-backdrop)',
    height: '100vh',
    left: '0',
    position: 'fixed',
    top: '0',
    width: '100vw',
    zIndex: '1300',
  },
  confirmDialogBtnGroup: {
    marginTop: '1.5rem',
    textAlign: 'right',
  },
  confirmDialogBtnGroup_button: {
    '&:first-of-type': {
      marginRight: '1rem',
    },
  },
  confirmDialogCancelBtn: {
    marginRight: '1rem',
  },
  confirmFocusGuard: {
    height: '0',
    left: '1px',
    overflow: 'hidden',
    padding: '0',
    position: 'fixed',
    top: '1px',
    width: '1px',
  },
  confirmDialogSection: {
    animationDelay: '100ms',
    animationDuration: '150ms',
    animationFillMode: 'forwards',
    animationName: 'fadeIn',
    animationTimingFunction: 'ease-in-out',
    background: 'var(--ps-surface-weak)',
    borderColor: 'var(--ps-border-weak)',
    borderRadius: '8px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow:
      '0 10px 15px -3px rgba(0 0 0 / 1%), 0 4px 6px -2px rgba(0 0 0 / 5%)',
    color: 'var(--ps-text)',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'inherit',
    marginBottom: '3.75rem',
    marginTop: '3.75rem',
    maxWidth: '30rem',
    opacity: '0',
    outline: 'transparent solid 2px',
    outlineOffset: '2px',
    paddingBottom: '1.5rem',
    paddingInlineEnd: '1.5rem',
    paddingInlineStart: '1.5rem',
    position: 'relative',
    width: '100%',
    zIndex: '1400',
  },
  confirmDialogWrapper: {
    alignItems: 'flex-start',
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    left: '0',
    overflow: 'auto',
    position: 'fixed',
    top: '0',
    width: '100vw',
    zIndex: '1400',
    MozBoxPack: 'center',
    WebkitBoxPack: 'center',
  },
  confirmDialogHeader: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: '1.5rem',
    marginTop: '2.5rem',
  },
  confirmDialogTitleIcon: {
    color: 'var(--ps-danger-border)',
    lineHeight: 'initial',
    marginInlineEnd: '0.625rem',
  },
}
