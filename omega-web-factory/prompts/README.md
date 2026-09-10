# Prompt governance

Prompts are versioned production inputs, never sources of truth. Each prompt record should declare: `prompt_id`, version, purpose, allowed sources, required inputs, output schema, prohibited invention, validation gate and last verification date. Research prompts must distinguish source-derived claims from inference; design prompts must inherit the Design System; code prompts must inherit Product Router and security constraints; QA prompts may report only checks actually performed.
