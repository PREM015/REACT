# Hooks Cheatsheet

## Basic Hooks
- `useState(initialValue)` - State management
- `useEffect(callback, deps)` - Side effects
- `useContext(Context)` - Context consumption

## Additional Hooks
- `useReducer(reducer, initialState)` - Complex state logic
- `useCallback(fn, deps)` - Memoized callbacks
- `useMemo(fn, deps)` - Memoized values
- `useRef(initialValue)` - Mutable refs
- `useId()` - Unique IDs (React 18+)

## Rules of Hooks
1. Only call at top level
2. Only call from React functions
3. Custom hooks start with 'use'
