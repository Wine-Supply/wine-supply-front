import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0;
  background-color: var(--background-color);
  min-height: 100%;

  .profile-header {
    color: var(--font-color);
    font-size: 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4rem;
  }

  .profile-pic {
    border-radius: 50%;
    width: 15rem;
  }

  .profile-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.4rem;
    margin-bottom: 3rem;
  }

  #choose-file {
    opacity: 0;
  }

  .photo-container {
    position: relative;
  }

  .edit-btn {
    position: absolute;
    top: -0.8rem;
    right: -0.8rem;
    cursor: pointer;
    font-size: 2rem;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .form-input {
    color: var(--color-dark);
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    border: none;
    border-radius: 8px;
    outline: none;
  }

  .form-label {
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    color: var(--font-color);
  }

  .update-btn {
    background-color: var(--red);
    font-weight: bold;
    font-size: 1.6rem;
    letter-spacing: 0.5px;
    cursor: pointer;
    color: var(--font-color);
    padding: 0.5em 0;
    width: 16rem;
    border: none;
    border-radius: 6px;
    margin-top: 1rem;
    transition: all 0.3s;
  }

  .update-btn:hover {
    background-color: #793a3a;
  }

  .purchase-history {
    width: 100%;
    padding: 0 1.6rem;
    overflow: hidden;
  }

  .purchase-heading {
    display: flex;
    justify-content: space-between;
    font-family: var(--font-title);
    color: var(--font-color);
    font-size: 3rem;
    padding-bottom: 0.6rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid currentColor;
    cursor: pointer;
  }

  .down-icon {
    font-size: 1.6rem;
  }

  .history {
    /* display: none; */

    transform: translateY(-110%);
    transition: all 2s;
  }

  .history-display {
    transform: translateY(0);
  }

  @media (min-width: 600px) {
    .purchase-heading {
      font-size: 3.6rem;
    }
  }
`;

export const Article = styled.article`
  margin-bottom: 3rem;

  .header-text {
    color: var(--font-color);
    font-size: 1.6rem;
    margin-bottom: 2rem;
  }

  .details-heading {
    font-size: 1.6rem;
    text-align: center;
    color: var(--font-color);
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .purchase-detail {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    margin-bottom: 2rem;
  }

  .img-container {
    justify-self: center;
  }

  .purchase-img {
    width: 6rem;
  }

  .purchase-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.4rem;
    color: var(--font-color);
  }

  .item-rating {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .purchase-footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.8rem;
    color: var(--font-color);
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (min-width: 600px) {
    .header-text {
      font-size: 2rem;
      text-align: center;
    }

    .details-heading {
      font-size: 2rem;
    }

    .purchase-info {
      font-size: 1.8rem;
    }

    .purchase-footer {
      font-size: 2.4rem;
    }
  }
`;
