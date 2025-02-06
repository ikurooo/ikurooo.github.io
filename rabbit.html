<!DOCTYPE html>
<html lang="en-GB">
<head>
    <title>A Simplified RabbitMQ Clone with Multithreading</title>
</head>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/stylesheet.css">
<link rel="stylesheet" href="css/blocks.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>


<body>
<link rel="stylesheet" href="css/head.css">
<div class="container">
    <div class="align">
        <div class="head align">
            A Simplified RabbitMQ Clone with Multithreading
        </div>
    </div>
</div>

<div class="container">
    <div class="align">
        <link rel="stylesheet" href="css/aboutme.css">
        <div class="aboutme" id="about-section">

            <h1>Simplified RabbitMQ Implementation</h1>
            <p>A lightweight message broker implementing core RabbitMQ features, including # and * routing via topic
                exchanges. Supports multi-threading for handling concurrent clients and registers dynamically with a
                local
                DNS provider for streamlined discovery. The client interface enables flexible message queuing operations
                such as exchange creation, queue binding, publishing, and subscribing.</p>

            <h2>Supported Commands</h2>
            <pre><code class="language-plaintext">exchange &lt;type&gt; &lt;name&gt;                         # Create an exchange (direct, fanout, topic, or default).
queue &lt;name&gt;                                   # Declare a queue.
bind &lt;binding-key&gt;                             # Bind the declared queue to the exchange.
publish &lt;routing-key&gt; &lt;message&gt;                # Send a message to an exchange.
subscribe                                      # Listen for messages from a queue.
register &lt;name&gt; &lt;ip:port&gt;                      # Register a broker domain with the DNS server.
resolve &lt;name&gt;                                 # Retrieve the IP and port for a registered broker.
unregister &lt;name&gt;                              # Remove a broker domain from the DNS server.
exit                                           # Disconnect from the broker or DNS server.
</code></pre>


            <h2>To Start The Client</h2>
            <pre><code class="language-plaintext">mvn compile                                    # First compile the project with Maven
mvn exec:java@&lt;componentId&gt;                    # Start the client application with the following command where componentId is one of client-0, client-1 or client-2.
mvn compile exec:java@&lt;componentId&gt;            # You can also combine both commands into one
</code></pre>

            <h2>To Start The Broker</h2>
            <pre><code class="language-plaintext">mvn compile                                    # First compile the project with Maven
mvn exec:java@&lt;componentId&gt;                    # Start the client application with the following command where componentId is one of broker-0, broker-1 or broker-2.
mvn compile exec:java@&lt;componentId&gt;            # You can also combine both commands into one
</code></pre>
        </div>
    </div>
</div>

<link rel="stylesheet" href="css/white.css">
<link rel="stylesheet" href="css/contact.css">
<div class="white">
    <div class="container">
        <div class="head align">
            Implementation Highlights:
        </div>
    </div>

    <div class="container">
        <div class="align block">
            <h3>Wildcard Routing Using the Trie Datastructure</h3>

            <pre><code class="language-java">

    public void publish(String[] routingKey, String message) {
        Stack<Pair<TrieNode, Integer>> stack = new Stack<>();
        stack.push(new Pair<>(this.root, 0));

        while (!stack.isEmpty()) {
            Pair<TrieNode, Integer> curr = stack.pop();

            if (curr.index() >= routingKey.length) {
                Optional.ofNullable(curr.node().getNext().get("#"))
                        .map(TrieNode::getQueues)
                        .orElse(curr.node().getQueues())
                        .forEach(queue -> queue.enqueue(message));
                continue;
            }

            if (curr.node().getNext().containsKey(routingKey[curr.index()]))
                stack.push(new Pair<>(curr.node().getNext().get(routingKey[curr.index()]), curr.index() + 1));


            if (curr.node().getNext().containsKey("*"))
                stack.push(new Pair<>(curr.node().getNext().get("*"), curr.index() + 1));

            if (curr.node().getNext().containsKey("#")) {
                stack.push(new Pair<>(curr.node().getNext().get("#"), curr.index()));
                stack.push(new Pair<>(curr.node(), curr.index() + 1));
            }
        }
                </code></pre>
        </div>
    </div>
    <div class="container">
        <div class="align block reverse">
            <pre><code class="language-java">
    @Override
    public void run() {
        System.out.println("Broker is running. Listening for clients on port " + port);
        this.registerWithDNS();
        Stream.generate(this::tryAcceptClient)
                .takeWhile(clientSocket -> this.running)
                .forEach(clientSocket -> clientSocket.ifPresent(socket -> {
                    this.clientHandlerPool.submit(
                        new BrokerClientHandler(socket, this.exchanges, this.queues, this.defaultExchange));
                }));
    }

    private Optional<Socket> tryAcceptClient() {
        try {
            return Optional.of(this.serverSocket.accept());
        } catch (IOException e) {
            System.err.println("Error accepting client connection: " + e.getMessage());
            return Optional.empty();
        }
    }
                </code></pre>

            <h3>Parallel Execution Using a Thread Pool and Java Sockets</h3>

        </div>
    </div>
    <div class="container">
        <div class="align block">
            <h3>Thread-Safe, Null-Safe Stream Reads.</h3>

            <pre><code class="language-java">
    @Override
    public synchronized Thread subscribe(Consumer<String> messageConsumer) {
        this.sendMessage("subscribe");
        if (!this.awaitResponse("ok")) {
            return new Thread(() -> {
                System.err.println("broker side error, press ENTER to continue.");
            });
        }
        return new Thread(() -> Stream.generate(this::getFromSubscription)
                .takeWhile(line -> !Thread.currentThread().isInterrupted())
                .filter(Objects::nonNull)
                .forEach(messageConsumer));
    }

    @Override
    public String getFromSubscription() {
        try {
            return socketReader.readLine();
        } catch (IOException e) {
            System.err.println("error while reading from socket.");
            return null;
        }
    }
                </code></pre>
        </div>
    </div>
    <div class="container">
        <div class="align">
            <div class="contact">
                <p>🔗 View The Project On GitHub:
                    <a href="https://github.com/Ikurooo/SMQP_Broker" target="_blank">Broker</a>
                    <a href="https://github.com/Ikurooo/SMQP_Client" target="_blank">Client</a>
                </p>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="align">
            <div class="contact">© 2025 Ivan Cankov. All rights reserved.</div>
        </div>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"></script>
</body>