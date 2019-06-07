<template>
  <div>
    <div class="facebook-preview">
    <div class="company">
      <div class="company-logo">
        <img src="images/apple-logo.png">
      </div>
      <div class="page-name">
        <slot name="ad-title">Default title</slot>
        <span>Sponsored</span>
      </div>
    </div>
    <slot name="ad-message">Whatever Eddy wants you to write</slot>
    <div class="image">
      <img src="facebook-cover.png">
    </div>
    <div class="main">
      <slot name="vacancy-title">Lorem ipsum dolor sit amet</slot>
      <p><slot name="vacancy-description">Amet aspernatur culpa, cumque debitis dolor eos harum nemo nihil odio quia quidem</slot></p>
    </div>
  </div>
  </div>
</template>

<script>
  export default {
    props: {
      ad: {
        type: Object,
        default: () => ({
          message: 'Facere, laudantium!',
          title: 'Lorem ipsum dolor sit amet',
          description: 'Amet aspernatur culpa, cumque debitis dolor eos harum nemo nihil odio quia quidem',
          image: './assets/images/facebook-cover.png', // transparent pixel
          page: {
            name: 'The Lorem Company',
            icon: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', // transparent pixel
          },
        }),
      },
    },
  };
</script>
<style lang="scss" scoped>
  .loading {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span,
    img {
      color: transparent !important;
      background: linear-gradient(-45deg, #eee, #cdcdcd, #eee);
      background-size: 400% 400%;
      border-radius: 10px;
      -webkit-animation: Gradient 5s ease infinite;
      -moz-animation: Gradient 5s ease infinite;
      animation: Gradient 5s ease infinite;
    }
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }

  .facebook-preview {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    max-width: 320px;
    height: min-content;
    padding: 0.75rem;
    font-size: 0.875rem;
    color: #000;
    border: 1px solid var(--border-light);
    background-color: var(--color-white);
    border-radius: 5px;

    .image {
      display: flex;
      flex-direction: column;
      overflow: hidden;
      background-color: #D8D8D8;

      img {
        width: 100%;
        height: 100%;
        min-height: 120px;
        max-height: 300px;
        object-fit: cover;
      }
    }

    .company {
      display: flex;
      flex-direction: row;
      align-items: center;
      min-height: 2.5rem;

      .company-logo {
        display: flex;
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 10px;

        img {
          align-self: center;
          min-width: 2.5rem;
          max-width: 2.5rem;
          min-height: 2.5rem;
          max-height: 2.5rem;
          background-color: #D8D8D8;
          border-radius: 50%;
        }
      }

      .page-name {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      h4 {
        font-size: 0.875rem;
        font-weight: 600;
        color: #3B5998;
      }

      span {
        font-size: 0.75rem;
        color: #9197A3;
      }
    }

    .message {
      align-self: flex-start;
      padding: 0;
      margin: 0.5rem 0;
      font-size: 0.75rem;
      color: #141823;
    }

    .main {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: flex-start;
      justify-content: space-between;
      padding: 0.75rem;
      color: #141823;
      border: 1px solid var(--border-light);
      border-top: 0;

      h3 {
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
        font-weight: 600;
      }

      p {
        margin-bottom: 0.5rem;
        font-size: 0.75rem;
      }
    }
  }
</style>

