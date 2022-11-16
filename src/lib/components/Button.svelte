<button {...$$restProps}>
    <slot></slot>
</button>

<style>
    button {
        padding: 1rem 2rem;
        border: 0;
        background-color: var(--green);
        border-radius: 1.5rem;
        font-weight: bold;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
        transition: filter 200ms ease-in-out;
    }

    button:focus {
        filter: brightness(90%);
    }

    @media (hover: hover) {
        button:hover {
            filter: brightness(90%);
        }
    }
</style>