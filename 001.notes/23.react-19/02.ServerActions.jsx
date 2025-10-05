// Server Actions (Next.js 14+ / React 19)

'use server';

// Server action
async function createTodo(formData) {
  const title = formData.get('title');
  
  // Database operation
  await db.todos.create({
    title,
    completed: false
  });
  
  revalidatePath('/todos');
}

// Client component using server action
'use client';

import { useActionState } from 'react';

function TodoForm() {
  const [state, formAction] = useActionState(createTodo, null);
  
  return (
    <form action={formAction}>
      <input name="title" type="text" required />
      <button type="submit">Add Todo</button>
      {state?.error && <p>{state.error}</p>}
    </form>
  );
}

export default TodoForm;
